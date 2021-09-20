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

npm run build

cd dist
python -m httpcompressionserver --bind 0.0.0.0

cd -
