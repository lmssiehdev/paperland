// Local mirror of paperio.site. Third-party ads/analytics are stripped.
// GAME_JS=original|deob picks which app2.js gets served.
const ROOT = "original";
const GAME_JS = process.env.GAME_JS ?? "src";
const JS_PATHS: Record<string, string> = {
  original: "original/app2.js",
  deob: "deob/stage2/deobfuscated.js",
  game: "deob/game.js",
  src: "dist/app2.js",
};

const html = (await Bun.file(`${ROOT}/index.html`).text())
  // drop every external <script src=...> (gtag, adinplay, cloudflare, yandex)
  .replace(/<script[^>]*src="(https?:)?\/\/[^"]*"[^>]*><\/script>/g, "")
  .replace(/<script[^>]*>\s*\(function\(g,a,m,e,A,d,s\)[\s\S]*?<\/script>/, "")
  .replace(/<script type="text\/javascript" >[\s\S]*?ym\([\s\S]*?<\/script>/, "")
  // stubs for the ad globals the inline page script calls
  .replace("<head>", "<head><script>window.GameAdsRenew=()=>{};window.aipDisplayTag={display(){}};</script>");

const server = Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname === "/") return new Response(html, { headers: { "content-type": "text/html" } });
    if (pathname === "/app2.js") return new Response(Bun.file(JS_PATHS[GAME_JS]));
    if (pathname === "/newpaperio/ajax/results.php") {
      console.log("[results.php]", (await req.text()).length, "bytes (not forwarded)");
      return new Response("ok");
    }
    const file = Bun.file(`${ROOT}${pathname}`);
    if (await file.exists()) return new Response(file);
    console.log("[404]", pathname);
    return new Response("not found", { status: 404 });
  },
});
console.log(`serving ${GAME_JS} build on ${server.url}`);
