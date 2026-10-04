// Static server for the offline replay harness (localhost only).
const root = new URL("../original/", import.meta.url).pathname;
const probes = new URL("./", import.meta.url).pathname;
const port = Number(process.env.PORT || 3999);
Bun.serve({
  port, hostname: "127.0.0.1",
  async fetch(req) {
    const p = new URL(req.url).pathname;
    if (p === "/" || p === "/replay.html") return new Response(Bun.file(probes + "replay.html"));
    if (p === "/fake-io.js") return new Response(Bun.file(probes + "fake-io.js"));
    if (p === "/frames.json") return new Response(Bun.file(probes + "../ws-frames.json"));
    const f = Bun.file(root + decodeURIComponent(p).replace(/^\/+/, ""));
    if (await f.exists()) return new Response(f);
    return new Response("not found", { status: 404 });
  },
});
console.log("replay server on http://127.0.0.1:" + port);
