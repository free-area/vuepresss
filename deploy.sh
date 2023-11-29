#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
pnpm docs:build
# 进入生成的文件夹
cd src/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git branch -M main
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 修改为你的                github用户名/仓库名
git push -f https://github.com/free-area/vuepresss.git main:gh-pages
cd -