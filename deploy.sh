#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
echo 'singlequote.cn' > CNAME
git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:t13219006372/t13219006372.github.io.git master:release
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd -