#!/usr/bin/env sh

# cd /Users/robin/Downloads/01\ git/blog
# 终止一个错误
# set -e

# 构建
cnpm run build

# 进入生成的构建文件夹
cd blog/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
# git rebase --continue

# 如果你想要部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:lotosv2010/lotosv2010.github.io.git master

# 链接远程仓库
git remote add origin https://github.com/lotosv2010/lotosv2010.github.io.git

# 拉取远程仓库的文件
git pull --rebase origin master

# 同步更新代码
git push -u origin master

cd -