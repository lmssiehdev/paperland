// Local mirror of paperio.site. Third-party ads/analytics are stripped.
//   /                classic mode; GAME_JS=src|game|deob|original picks which app2.js is served
//                    (GAME_JS_PATH=<file> overrides it, e.g. a build from a git worktree)
//   /teams/          teams mode       (MODE_JS=deob|original, default deob)
//   /battleroyale/   battle royale    (MODE_JS=deob|original, default deob)
// Game-over POSTs (results.php) are swallowed. Recorded responses (lb.php, token.php) are replayed.
// Research tool, not the product server (packages/server): bun run mirror  (PORT, default 3001).

// Paths are relative to the repo root, whatever the cwd.
const ROOT = new URL("../../../", import.meta.url).pathname;
const file = (path: string) => Bun.file(path.startsWith("/") ? path : ROOT + path);
const GAME_JS = process.env.GAME_JS ?? "src";
const MODE_JS = process.env.MODE_JS ?? "deob";
const JS_PATHS: Record<string, string> = {
  original: "original/app2.js",
  deob: "deob/stage2/deobfuscated.js",
  game: "deob/game.js",
  src: "packages/client/dist/app2.js"
};

// mode prefix -> { dir, js file name in page, deobfuscated build }
const MODES: Record<string, { dir: string; deob: string }> = {
  "/teams/": { dir: "modes/teams/original", deob: "modes/teams/deob/deobfuscated.js" },
  "/battleroyale/": { dir: "modes/battleroyale/original", deob: "modes/battleroyale/deob/pass3/deobfuscated.js" }
};

const AD_STUBS =
  "<script>window.GameAdsRenew=()=>{};window.aipDisplayTag={display(){}};window.aipPlayer=function(){return{startPreRoll(){}}};</script>";
const cleanHtml = (html: string) =>
  html
    // drop every external <script src=...> (gtag, adinplay, cloudflare, yandex)
    .replace(/<script[^>]*src="(https?:)?\/\/[^"]*"[^>]*><\/script>/g, "")
    .replace(/<script[^>]*>\s*\(function\(g,a,m,e,A,d,s\)[\s\S]*?<\/script>/, "")
    .replace(/<script type="text\/javascript" >[\s\S]*?ym\([\s\S]*?<\/script>/, "")
    .replace("<head>", "<head>" + AD_STUBS);

// Our build gets our own page (packages/client/public); original builds still expect the original page's globals.
const OUR_PAGE = "packages/client/public/";
const classicHtml =
  GAME_JS === "src" ? await file(OUR_PAGE + "index.html").text() : cleanHtml(await file("original/index.html").text());
const html = (body: string) => new Response(body, { headers: { "content-type": "text/html" } });

export async function siteFetch(req: Request): Promise<Response> {
  const { pathname } = new URL(req.url);
  if (pathname.endsWith("results.php")) {
    console.log(`[${pathname}]`, (await req.text()).length, "bytes (not forwarded)");
    return new Response("ok");
  }

  const prefix = Object.keys(MODES).find(p => pathname === p.slice(0, -1) || pathname.startsWith(p));
  if (prefix) {
    const mode = MODES[prefix]!;
    const rel = pathname.slice(prefix.length) || "index.html";
    if (rel === "index.html") return html(cleanHtml(await file(`${mode.dir}/index.html`).text()));
    if (rel === "app.js" && MODE_JS === "deob")
      return new Response(file(mode.deob), { headers: { "content-type": "text/javascript" } });
    const modeFile = file(`${mode.dir}/${rel}`);
    if (await modeFile.exists()) return new Response(modeFile);
    // shared root assets (icons etc.)
    const shared = file(`original/${rel}`);
    if (await shared.exists()) return new Response(shared);
    console.log("[404]", pathname);
    return new Response("not found", { status: 404 });
  }

  if (pathname === "/") return html(classicHtml);
  if (GAME_JS === "src" && (pathname === "/style.css" || pathname.startsWith("/assets/fonts/"))) {
    return new Response(file(OUR_PAGE + pathname.slice(1)));
  }
  if (pathname === "/app2.js") return new Response(file(process.env.GAME_JS_PATH ?? JS_PATHS[GAME_JS]!));
  const asset = file(`original${pathname}`);
  if (await asset.exists()) return new Response(asset);
  console.log("[404]", pathname);
  return new Response("not found", { status: 404 });
}

const server = Bun.serve({ port: Number(process.env.PORT ?? 3001), fetch: siteFetch });
console.log(`mirror: classic=${GAME_JS}, modes=${MODE_JS} on ${server.url}`);
