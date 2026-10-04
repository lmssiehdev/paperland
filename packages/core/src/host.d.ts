// The only host APIs core may use. They exist in browsers and in Bun alike; anything else
// (DOM, Bun.*, node:*) is a compile error here because core builds with lib ES2022 and no @types.
// This file is only part of core's own typecheck; client and server see their real lib/bun typings.

interface Console {
  log(...data: unknown[]): void;
  warn(...data: unknown[]): void;
  error(...data: unknown[]): void;
  assert(condition?: boolean, ...data: unknown[]): void;
}
declare var console: Console;

declare function setTimeout(handler: () => void, timeout?: number): number;
declare function clearTimeout(id: number | undefined): void;
declare function setInterval(handler: () => void, timeout?: number): number;
declare function clearInterval(id: number | undefined): void;

declare var performance: { now(): number };
