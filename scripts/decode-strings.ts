// Pass 1: inline obfuscator.io string-array lookups (a0_0x2b1e("0x1f") -> "literal")
// webcrack doesn't recognise this older decoder shape, so we do it ourselves.
import { parse } from "@babel/parser";
import _traverse from "@babel/traverse";
import _generate from "@babel/generator";
import * as t from "@babel/types";

const traverse = (_traverse as any).default ?? _traverse;
const generate = (_generate as any).default ?? _generate;

const [input = "original/app2.js", output = "deob/stage1.js"] = process.argv.slice(2);
const src = await Bun.file(input).text();
const ast = parse(src, { sourceType: "script" });
const body = ast.program.body;

// Statement 0: the array. Statement 1: the rotation IIFE. Statement 2: the decoder.
const arrDecl = body[0] as t.VariableDeclaration;
const arrName = (arrDecl.declarations[0].id as t.Identifier).name;
const decoderName = ((body[2] as t.VariableDeclaration).declarations[0].id as t.Identifier).name;

// Run the first three statements to get the rotated array + decoder for real.
const setup = body.slice(0, 3).map((n) => generate(n).code).join("\n");
const decode: (i: string) => string = new Function(`${setup}; return ${decoderName};`)();

let replaced = 0;
traverse(ast, {
  CallExpression(path: any) {
    const { callee, arguments: args } = path.node;
    if (!t.isIdentifier(callee, { name: decoderName })) return;
    if (args.length !== 1 || !t.isStringLiteral(args[0])) return;
    path.replaceWith(t.stringLiteral(decode(args[0].value)));
    replaced++;
  },
});

// Drop the array/rotation/decoder now that nothing references them.
ast.program.body = body.slice(3);
await Bun.write(output, generate(ast, { jsescOption: { minimal: true } }).code);
console.log(`${arrName}/${decoderName}: inlined ${replaced} strings -> ${output}`);
