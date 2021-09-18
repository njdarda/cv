#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd "$(dirname "$0")"
rm -rf ./docs
mv ./dist ./docs
git add .
git commit -m 'deploy'

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git push

cd -
