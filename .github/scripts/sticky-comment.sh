#!/usr/bin/env bash
# Creates or edits the PR's single preview comment (found by $MARKER), so new commits update it in place.
# Needs GH_TOKEN, GITHUB_REPOSITORY, PR and MARKER in the environment; the body is $1.
set -euo pipefail

body=$(printf '%s\n' "$1" | sed 's/^ *//')
id=$(gh api --paginate "repos/$GITHUB_REPOSITORY/issues/$PR/comments" \
  --jq ".[] | select(.user.login == \"github-actions[bot]\" and (.body | startswith(\"$MARKER\"))) | .id" | head -1)

if [ -n "$id" ]; then
  gh api --method PATCH "repos/$GITHUB_REPOSITORY/issues/comments/$id" -f body="$body" > /dev/null
else
  gh api "repos/$GITHUB_REPOSITORY/issues/$PR/comments" -f body="$body" > /dev/null
fi
