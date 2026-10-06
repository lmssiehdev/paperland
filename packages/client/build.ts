// Builds the site Caddy serves (and the Bun server serves in dev): dist/site/.
//   bun build.ts            production: minified, linked sourcemap, precompressed .br/.gz copies
//   bun build.ts --dev      dev build (__DEV__=true: window.paperio2api, debug keys, ?seed= ?mode=)
//   bun build.ts --dev --watch   dev build, rebuilt on every change under src/, public/ or core/protocol
//
// Layout (the cache policy depends on it, see deploy/Caddyfile):
//   index.html          the page; fixed name, always revalidated
//   static/             everything with a content hash in its name (JS, CSS, manifest, icon): cached forever
//   assets/             files the game fetches by computed path (skins, languages.json, fonts, images):
//                       fixed names, always revalidated
import { watch } from "node:fs";
import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";

const dev = Bun.argv.includes("--dev");
const CLIENT = new URL("./", import.meta.url).pathname;
const ROOT = new URL("../../", import.meta.url).pathname;
const OUT = CLIENT + "dist/site/";

async function build(): Promise<boolean> {
  const started = performance.now();
  // Empty OUT but keep the directory itself: the dev server's directory route holds it open, and a
  // deleted-and-recreated OUT would 404 every request until the server restarts.
  await mkdir(OUT, { recursive: true });
  await Promise.all((await readdir(OUT)).map(entry => rm(OUT + entry, { recursive: true, force: true })));
  const result = await Bun.build({
    entrypoints: [CLIENT + "public/index.html"],
    outdir: OUT,
    minify: !dev,
    sourcemap: dev ? "inline" : "linked",
    define: { __DEV__: String(dev) },
    // Fonts stay separate files (copied below): inlined, every visitor would download all four unicode-range
    // subsets inside the render-blocking stylesheet.
    external: ["*.woff2"],
    naming: { entry: "[dir]/[name].[ext]", chunk: "static/[name]-[hash].[ext]", asset: "static/[name]-[hash].[ext]" }
  });
  if (!result.success) {
    for (const log of result.logs) {
      console.error(log);
    }
    return false;
  }
  await mkdir(OUT + "assets", { recursive: true });
  // The client shows the WebP logo; the captured logo.png (kept for the original game) and the unused
  // heart.gif stay out of the site.
  await cp(ROOT + "original/assets/", OUT + "assets/", {
    recursive: true,
    filter: path => !/(images\/logo\.png|\.gif)$/.test(path)
  });
  await cp(CLIENT + "public/assets/fonts/", OUT + "assets/fonts/", {
    recursive: true,
    filter: path => !path.endsWith(".css")
  });
  if (!dev) {
    await precompress();
  }
  console.log(`built ${dev ? "dev" : "production"} site in ${Math.round(performance.now() - started)} ms -> ${OUT}`);
  return true;
}

/** Writes .br and .gz next to every text file, for Caddy's `file_server { precompressed }` (no per-request compression). */
async function precompress(): Promise<void> {
  const files = await readdir(OUT, { recursive: true });
  await Promise.all(
    files
      .filter(path => /\.(html|js|css|json|svg|map)$/.test(path))
      .map(async path => {
        const bytes = await Bun.file(OUT + path).bytes();
        const br = brotliCompressSync(bytes, { params: { [constants.BROTLI_PARAM_QUALITY]: 11 } });
        await Promise.all([
          Bun.write(OUT + path + ".br", br),
          Bun.write(OUT + path + ".gz", gzipSync(bytes, { level: 9 }))
        ]);
      })
  );
}

const ok = await build();
if (Bun.argv.includes("--watch")) {
  const dirs = [CLIENT + "src", CLIENT + "public", ROOT + "packages/core/src", ROOT + "packages/protocol/src"];
  let timer: ReturnType<typeof setTimeout> | undefined;
  for (const dir of dirs) {
    watch(dir, { recursive: true }, () => {
      clearTimeout(timer);
      timer = setTimeout(() => void build(), 50);
    });
  }
  console.log("watching for changes (reload the page to pick them up)");
} else if (!ok) {
  process.exit(1);
}
