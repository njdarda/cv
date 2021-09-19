#!/usr/bin/env sh

# abort on errors
set -e

cd "$(dirname "$0")"

# build
echo -e "
    LOCAL_BUILD=1
    JS_SOURCE_MAP=1
    CSS_SOURCE_MAP=1
" > ./.env.local

npm run build

cd dist
python -m httpcompressionserver --bind 0.0.0.0

cd -
