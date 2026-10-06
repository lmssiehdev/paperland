#!/bin/sh
# Builds and ships to one server over SSH:  deploy/deploy.sh user@host
#   TARGET (default bun-linux-x64; bun-linux-arm64 for ARM boxes) is the server binary's platform.
# Order matters for caching (deploy/Caddyfile):
#   1. new static/ files land next to the old ones (never deleted here: a page loaded just before the switch
#      still finds its old bundle);
#   2. assets/, then index.html last, so no page ever points at a bundle that is not there yet;
#   3. the server binary is swapped atomically and restarted (open games end: rooms live in memory).
set -eu
HOST=${1:?usage: deploy/deploy.sh user@host}
TARGET=${TARGET:-bun-linux-x64}
cd "$(dirname "$0")/.."

bun run --filter @paperio/client build
(cd packages/server && bun run build --target="$TARGET")

SITE=packages/client/dist/site
rsync -az "$SITE/static/" "$HOST:/srv/paperio/site/static/"
rsync -az --delete "$SITE/assets/" "$HOST:/srv/paperio/site/assets/"
rsync -az "$SITE/index.html" "$SITE/index.html.br" "$SITE/index.html.gz" "$HOST:/srv/paperio/site/"

rsync -az packages/server/dist/paperio-server "$HOST:/opt/paperio/paperio-server.new"
ssh "$HOST" 'mv /opt/paperio/paperio-server.new /opt/paperio/paperio-server && sudo systemctl restart paperio'
echo "deployed to $HOST"
