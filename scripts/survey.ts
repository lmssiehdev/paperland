// Prints every top-level-ish class/function with its methods, to drive the rename map.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
const traverse = (_traverse as any).default ?? _traverse;
const src = await Bun.file(process.argv[2] ?? "deob/stage2/deobfuscated.js").text();
const ast = parse(src, { sourceType: "script" });
traverse(ast, {
  ClassDeclaration(p: any) {
    const n = p.node;
    const methods = n.body.body.filter((m: any) => m.key?.name).map((m: any) => (m.static ? "static " : "") + m.key.name);
    const fields = new Set<string>();
    p.traverse({ AssignmentExpression(a: any) {
      const l = a.node.left;
      if (l.type === "MemberExpression" && l.object.type === "ThisExpression" && l.property.name) fields.add(l.property.name);
    }});
    console.log(`L${n.loc.start.line} ${n.id.name}${n.superClass ? " extends " + n.superClass.name : ""}\n   m: ${methods.join(",")}\n   f: ${[...fields].slice(0, 25).join(",")}`);
  },
});
