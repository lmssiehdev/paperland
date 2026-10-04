// Inline obfuscator.io string-array lookups that webcrack left behind, wherever the array,
// rotation IIFE and decoder sit, including calls through local aliases (`var a = dec; a(12)`).
// usage: bun scripts/decode-strings-generic.ts <in.js> <out.js>
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;
const [input, output] = process.argv.slice(2);
const ast = parse(await Bun.file(input!).text(), { sourceType: "script" });
const body = ast.program.body;

// 1. the string array: top-level var/const whose init is a large array of string literals
const arrStmt = body.find((s: any) =>
  t.isVariableDeclaration(s) && s.declarations.length === 1 && t.isArrayExpression(s.declarations[0].init) &&
  s.declarations[0].init.elements.length > 50 && s.declarations[0].init.elements.every((e: any) => t.isStringLiteral(e))) as any;
if (!arrStmt) { console.log("no string array found"); process.exit(1); }
const arrName = arrStmt.declarations[0].id.name;

// 2. decoder: top-level function that references the array
const mentions = (n: any, name: string) => generate(n).code.includes(name);
const decStmt = body.find((s: any) => s !== arrStmt && (t.isFunctionDeclaration(s) || t.isVariableDeclaration(s)) && mentions(s, arrName)) as any;
const decName = t.isFunctionDeclaration(decStmt) ? decStmt.id.name : decStmt.declarations[0].id.name;
// 3. rotation: top-level expression statement calling something with the array as argument
const rotStmt = body.find((s: any) => t.isExpressionStatement(s) && t.isCallExpression(s.expression) &&
  s.expression.arguments.some((a: any) => t.isIdentifier(a, { name: arrName }))) as any;

const setup = [arrStmt, decStmt, rotStmt].filter(Boolean).map((n) => generate(n).code).join("\n");
const decode: (...a: any[]) => string = new Function(`${setup}; return ${decName};`)();

// 4. collect decoder + aliases (scope-aware), replace calls with literal args
let replaced = 0, failed = 0;
traverse(ast, {
  CallExpression(p: any) {
    const callee = p.node.callee;
    if (!t.isIdentifier(callee)) return;
    let binding = p.scope.getBinding(callee.name);
    let isDecoder = callee.name === decName && (!binding || binding.path.node === decStmt || binding.kind === "hoisted");
    // follow alias chains: var x = dec; var y = x;
    let hops = 0;
    while (!isDecoder && binding && binding.path.isVariableDeclarator() && t.isIdentifier(binding.path.node.init) && hops++ < 5) {
      const target = binding.path.node.init.name;
      if (target === decName) { isDecoder = true; break; }
      binding = binding.path.scope.getBinding(target);
    }
    if (!isDecoder) return;
    if (!p.node.arguments.every((a: any) => t.isNumericLiteral(a) || t.isStringLiteral(a))) return;
    try {
      p.replaceWith(t.stringLiteral(decode(...p.node.arguments.map((a: any) => a.value))));
      replaced++;
    } catch { failed++; }
  },
});
// drop the setup statements, then re-parse (fresh scope info) and drop now-unused aliases
ast.program.body = body.filter((s) => s !== arrStmt && s !== decStmt && s !== rotStmt);
const ast2 = parse(generate(ast).code, { sourceType: "script" });
traverse(ast2, {
  VariableDeclarator(p: any) {
    if (!t.isIdentifier(p.node.init, { name: decName })) return;
    const b = p.scope.getBinding(p.node.id.name);
    if (b && !b.referencePaths.length) p.remove();
  },
});
await Bun.write(output!, generate(ast2, { jsescOption: { minimal: true } }).code);
console.log(`${arrName}/${decName}: inlined ${replaced} strings (${failed} failed) -> ${output}`);
