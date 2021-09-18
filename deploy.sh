#!/usr/bin/env sh

# abort on errors
set -e

cd "$(dirname "$0")"

# build
npm run deploy

git add .
git commit -m 'deploy'

git push

cd -
