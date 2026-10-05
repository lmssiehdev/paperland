// The product site: the page, the client bundle and static assets. Plain Bun.file routes (no plugin):
// the page loads one prebuilt bundle (bun run build / build:dev), so there is nothing for Bun's HTML
// bundler or @elysiajs/static to add. The research mirror of paperio.site lives in e2e/src/mirror.ts.
import { Elysia } from "elysia";

const ROOT = new URL("../../../", import.meta.url).pathname;
/** Where static files are looked up, in order. */
const STATIC_ROOTS = [ROOT + "packages/client/public/", ROOT + "original/"];
const BUNDLE = ROOT + "packages/client/dist/app2.js";

// Until the client has its own page: the captured page minus its third-party scripts, plus stubs for the
// ad globals it calls.
const AD_STUBS =
  "<script>window.GameAdsRenew=()=>{};window.aipDisplayTag={display(){}};window.aipPlayer=function(){return{startPreRoll(){}}};</script>";
const page = (await Bun.file(ROOT + "original/index.html").text())
  .replace(/<script[^>]*src="(https?:)?\/\/[^"]*"[^>]*><\/script>/g, "")
  .replace(/<script[^>]*>\s*\(function\(g,a,m,e,A,d,s\)[\s\S]*?<\/script>/, "")
  .replace(/<script type="text\/javascript" >[\s\S]*?ym\([\s\S]*?<\/script>/, "")
  .replace("<head>", "<head>" + AD_STUBS);

async function staticFile(pathname: string): Promise<Response> {
  // URL parsing already resolves ".." segments; refuse anything odd anyway.
  if (pathname.includes("..") || pathname.includes("\0")) {
    return new Response("bad path", { status: 400 });
  }
  for (const root of STATIC_ROOTS) {
    const file = Bun.file(root + pathname.slice(1));
    if (await file.exists()) {
      return new Response(file);
    }
  }
  return new Response("not found", { status: 404 });
}

export const site = new Elysia({ name: "site" })
  .get("/", () => new Response(page, { headers: { "content-type": "text/html; charset=utf-8" } }))
  .get("/app2.js", () => new Response(Bun.file(BUNDLE), { headers: { "content-type": "text/javascript" } }))
  .get("/*", ({ request }) => staticFile(new URL(request.url).pathname));
