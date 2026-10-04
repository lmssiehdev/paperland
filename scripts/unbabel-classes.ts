// Turns Babel-transpiled ES5 classes back into `class` syntax, so older builds (teams, battle royale)
// read like our src/ and can be diffed method by method.
//
//   var X = function () {                          class X extends P {
//     inherits(Inner, P);                            constructor(a) {
//     var _super = createSuper(Inner);                 super(a);
//     function Inner(a) {                              this.win = false;
//       var self; classCallCheck(this, Inner);        }
//       (self = _super.call(this, a)).win = false;    update(dt) {
//       return self;                                    super.update(dt);
//     }                                     ==>       }
//     createClass(Inner, [{ key: "update",           get isPlayer() { ... }
//       value: function (dt) {                      }
//         get(getProto(Inner.prototype), "update", this).call(this, dt); } },
//       { key: "isPlayer", get: function () { ... } }]);
//     return Inner;
//   }();
//
// usage: bun scripts/unbabel-classes.ts <in.js> <out.js>
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;
const [input, output] = process.argv.slice(2);
const ast = parse(await Bun.file(input!).text(), { sourceType: "script" });

const calleeName = (n: any) => (t.isCallExpression(n) && t.isIdentifier(n.callee) ? n.callee.name : null);
const exprStmtCall = (s: any) => (t.isExpressionStatement(s) && t.isCallExpression(s.expression) ? s.expression : null);

let converted = 0, skipped = 0;
traverse(ast, {
  VariableDeclarator(path: any) {
    const { id, init } = path.node;
    if (!t.isIdentifier(id) || !t.isCallExpression(init) || init.arguments.length) return;
    const fn = init.callee;
    if (!t.isFunctionExpression(fn) || fn.params.length) return;
    const body: any[] = fn.body.body;
    const last = body[body.length - 1];
    if (!t.isReturnStatement(last) || !t.isIdentifier(last.argument)) return;
    let innerName = last.argument.name;
    const ctor = body.find((s) => t.isFunctionDeclaration(s) && s.id.name === innerName);
    if (!ctor) return;
    // the constructor must call classCallCheck(this, Inner) — that's what makes it a Babel class
    const checkIdx = ctor.body.body.findIndex((s: any) => {
      const c = exprStmtCall(s);
      return c && c.arguments.length === 2 && t.isThisExpression(c.arguments[0]) && t.isIdentifier(c.arguments[1], { name: innerName });
    });
    if (checkIdx === -1) return;
    // Inner -> X everywhere inside the wrapper (static methods, `new Inner()`, instanceof...). Must happen
    // while the wrapper's scope still owns the binding; renaming after replaceWith misses those refs.
    if (innerName !== id.name) {
      path.get("init.callee").scope.rename(innerName, id.name);
      innerName = id.name;
    }

    let superClass: any = null;
    let superFnName: string | null = null;
    const methods: any[] = [];
    let ok = true;
    for (const s of body) {
      if (s === ctor || s === last) continue;
      const call = exprStmtCall(s);
      // inherits(Inner, Parent)
      if (call && call.arguments.length === 2 && t.isIdentifier(call.arguments[0], { name: innerName }) && !t.isArrayExpression(call.arguments[1])) {
        superClass = call.arguments[1];
        continue;
      }
      // var _super = createSuper(Inner)
      if (t.isVariableDeclaration(s) && s.declarations.length === 1 && t.isCallExpression(s.declarations[0].init) &&
          s.declarations[0].init.arguments.length === 1 && t.isIdentifier(s.declarations[0].init.arguments[0], { name: innerName })) {
        superFnName = s.declarations[0].id.name;
        continue;
      }
      // createClass(Inner, [proto], [static])
      if (call && t.isIdentifier(call.arguments[0], { name: innerName }) && call.arguments.slice(1).every((a: any) => t.isArrayExpression(a) || t.isNullLiteral(a))) {
        call.arguments.slice(1).forEach((arr: any, i: number) => {
          if (!t.isArrayExpression(arr)) return;
          for (const desc of arr.elements) {
            const prop = (k: string) => desc.properties.find((p: any) => t.isIdentifier(p.key, { name: k }) || t.isStringLiteral(p.key, { value: k }));
            const key = prop("key")?.value;
            if (!t.isStringLiteral(key)) { ok = false; continue; }
            for (const kind of ["value", "get", "set"] as const) {
              const f = prop(kind)?.value;
              if (!f) continue;
              if (!t.isFunctionExpression(f)) { ok = false; continue; }
              // class setters need exactly one parameter; Babel output allows `set: function () {}`
              const params = kind === "set" && !f.params.length ? [t.identifier("_value")] : f.params;
              const m = t.classMethod(kind === "value" ? "method" : kind, t.identifier(key.value), params, f.body, false, i === 1);
              methods.push(m);
            }
          }
        });
        continue;
      }
      ok = false; // something we don't understand inside the wrapper: leave it alone
    }
    if (!ok) { skipped++; return; }

    const ctorBody = ctor.body.body.slice();
    ctorBody.splice(checkIdx, 1);
    const constructor = t.classMethod("constructor", t.identifier("constructor"), ctor.params, t.blockStatement(ctorBody));
    const classNode = t.classDeclaration(t.identifier(id.name), superClass, t.classBody([constructor, ...methods]));

    // replace `var X = function(){...}()` with `class X ...`
    const decl = path.parentPath;
    if (decl.node.declarations.length !== 1) { skipped++; return; }
    decl.scope.removeOwnBinding(id.name); // the old `var X` binding; the class re-registers X
    const [newPath] = decl.replaceWith(classNode);
    converted++;

    newPath.traverse({
      CallExpression(p: any) {
        // _super.call(this, ...args)  ->  super(...args)
        const c = p.node.callee;
        if (superFnName && t.isMemberExpression(c) && t.isIdentifier(c.object, { name: superFnName }) && t.isIdentifier(c.property, { name: "call" }) && t.isThisExpression(p.node.arguments[0])) {
          p.replaceWith(t.callExpression(t.super(), p.node.arguments.slice(1)));
          return;
        }
        // implicit derived constructor: return _super.apply(this, arguments)  ->  super(...arguments)
        if (superFnName && t.isMemberExpression(c) && t.isIdentifier(c.object, { name: superFnName }) && t.isIdentifier(c.property, { name: "apply" }) &&
            t.isThisExpression(p.node.arguments[0]) && t.isIdentifier(p.node.arguments[1], { name: "arguments" })) {
          const sup = t.expressionStatement(t.callExpression(t.super(), [t.spreadElement(t.identifier("arguments"))]));
          if (p.parentPath.isReturnStatement()) p.parentPath.replaceWith(sup);
          else p.replaceWith(sup.expression);
          return;
        }
        // get(getProto(X.prototype), "m", this).call(this, ...args)  ->  super.m(...args)
        if (t.isMemberExpression(c) && t.isIdentifier(c.property, { name: "call" }) && t.isCallExpression(c.object)) {
          const g = c.object;
          if (g.arguments.length === 3 && t.isStringLiteral(g.arguments[1]) && t.isThisExpression(g.arguments[2]) && t.isCallExpression(g.arguments[0])) {
            p.replaceWith(t.callExpression(t.memberExpression(t.super(), t.identifier(g.arguments[1].value)), p.node.arguments.slice(1)));
          }
        }
      },
    });

    // Derived constructors: `var self; (self = super(a)).x = 1; return self;`  ->  `super(a); this.x = 1;`
    const ctorPath = newPath.get("body.body.0");
    const selfDecl = ctorPath.get("body.body").find((s: any) => s.isVariableDeclaration() && s.node.declarations.length === 1 && !s.node.declarations[0].init);
    if (superClass && selfDecl) {
      const selfName = selfDecl.node.declarations[0].id.name;
      let superStmtDone = false;
      ctorPath.traverse({
        AssignmentExpression(p: any) {
          if (!t.isIdentifier(p.node.left, { name: selfName }) || !t.isCallExpression(p.node.right) || !t.isSuper(p.node.right.callee)) return;
          const stmt = p.getStatementParent();
          const superCall = p.node.right;
          p.replaceWith(t.thisExpression());
          if (stmt.isExpressionStatement() && t.isThisExpression(stmt.node.expression)) stmt.replaceWith(t.expressionStatement(superCall));
          else stmt.insertBefore(t.expressionStatement(superCall));
          superStmtDone = true;
        },
      });
      if (superStmtDone) {
        ctorPath.traverse({
          ReturnStatement(p: any) { if (t.isIdentifier(p.node.argument, { name: selfName }) && p.getFunctionParent() === ctorPath) p.remove(); },
          Identifier(p: any) { if (p.node.name === selfName && p.isReferencedIdentifier()) p.replaceWith(t.thisExpression()); },
        });
        selfDecl.remove();
      }
    }
  },
});

await Bun.write(output!, generate(ast, { jsescOption: { minimal: true } }).code);
console.log(`converted ${converted} classes (${skipped} wrappers left as-is) -> ${output}`);
