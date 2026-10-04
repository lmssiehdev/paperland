#!/bin/sh
# Rebuild the readable teams source from the webcrack output. Run from the repo root.
set -e
D=modes/teams/readable
bun scripts/unbabel-classes.ts modes/teams/deob/deobfuscated.js $D/stage1.js        # Babel ES5 classes -> class syntax
bun scripts/rename-map.ts $D/stage1.js $D/names.json $D/stage2.js                    # top-level names
bun scripts/rename-map.ts $D/stage2.js $D/locals.json /tmp/teams-stage2b.js          # hand-named locals/params
bun scripts/rename-locals.ts /tmp/teams-stage2b.js $D/teams.js --params $D/locals.json --teams   # evidence-based locals
