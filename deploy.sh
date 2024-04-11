#!/bin/sh

echo "deploy front env-----------------------"

echo "build online file"
pnpm build

echo "upload to server"
scp -r ./src/.vuepress/dist/* root@43.134.15.128:/etc/nginx/www/blog/dist/
echo "done"

