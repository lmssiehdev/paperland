// bun run dev: rebuilds the client (dev build, __DEV__=true) on change and restarts the server on change.
// Reload the page to pick up client changes.
const client = new URL("../../client/", import.meta.url).pathname;
const build = ["build", "src/main.ts", "--format=iife", "--define", "__DEV__=true", "--outfile", "dist/app2.js"];
await Bun.spawn(["bun", ...build], { cwd: client, stdout: "inherit", stderr: "inherit" }).exited;
const watcher = Bun.spawn(["bun", ...build, "--watch"], { cwd: client, stdout: "inherit", stderr: "inherit" });
const server = Bun.spawn(["bun", "--watch", new URL("./index.ts", import.meta.url).pathname], {
  stdout: "inherit",
  stderr: "inherit"
});
const stop = () => {
  watcher.kill();
  server.kill();
  process.exit(0);
};
process.on("SIGINT", stop);
process.on("SIGTERM", stop);
await server.exited;
