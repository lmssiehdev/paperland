// Fold `"abc" === "xyz"` style opaque predicates and remove the dead branches, so webcrack's
// self-defending / debug-protection detection can match afterwards.
// usage: bun scripts/fold-literals.ts <in.js> <out.js>
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;
const [input, output] = process.argv.slice(2);
const ast = parse(await Bun.file(input!).text(), { sourceType: "script" });

let folded = 0, pruned = 0;
for (let pass = 0; pass < 3; pass++) {
  traverse(ast, {
    BinaryExpression: {
      exit(p: any) {
        const { left, right, operator } = p.node;
        if (!t.isStringLiteral(left) || !t.isStringLiteral(right)) return;
        const eq = left.value === right.value;
        const map: Record<string, boolean | undefined> = { "===": eq, "==": eq, "!==": !eq, "!=": !eq };
        if (map[operator] === undefined) return;
        p.replaceWith(t.booleanLiteral(map[operator]!));
        folded++;
      },
    },
    "IfStatement|ConditionalExpression": {
      exit(p: any) {
        const test = p.node.test;
        if (!t.isBooleanLiteral(test)) return;
        const keep = test.value ? p.node.consequent : p.node.alternate;
        if (!keep) { p.remove(); pruned++; return; }
        if (p.isIfStatement() && t.isBlockStatement(keep) && !keep.body.some((s: any) => t.isVariableDeclaration(s) && s.kind !== "var" || t.isFunctionDeclaration(s) || t.isClassDeclaration(s)))
          p.replaceWithMultiple(keep.body);
        else p.replaceWith(keep);
        pruned++;
      },
    },
  });
}
await Bun.write(output!, generate(ast, { jsescOption: { minimal: true } }).code);
console.log(`folded ${folded} comparisons, pruned ${pruned} dead branches -> ${output}`);
