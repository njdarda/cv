#!/usr/bin/env sh

# abort on errors
set -e

cd "$(dirname "$0")"

# build
echo -e "
    LOCAL_BUILD=false
    JS_SOURCE_MAP=false
    CSS_SOURCE_MAP=false
" > ./.env.local

npm run deploy

git add ./docs/
git commit -m 'deploy'

git push

cd -
