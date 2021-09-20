#!/usr/bin/env sh

# abort on errors
set -e

cd "$(dirname "$0")"

# build
echo -e "
    LOCAL_BUILD=true
    JS_SOURCE_MAP=true
    CSS_SOURCE_MAP=true
" > ./.env.local

npm run deploy

git add ./docs/
git commit -m 'deploy'

git push

cd -
