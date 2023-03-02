# Robin blog

## Development

```bash
yarn dev
yarn build
```

## Release

### 1.`windows`

```shell
Double click execution deploy.sh
```

### 2.`mac`

```shell
cd 'your local project directory'

./deploy.sh
```

## Access address

```shell
https://lotosv2010.github.io/
```

## VuePress

[documentation](https://v1.vuepress.vuejs.org/).

## Common problem

### 1. `-bash: ./deploy.sh: Permission denied`

**Solution:**

```shell
sudo chmod -R 777 某一目录

# 其中:
#   `-R `:是指级联应用到目录里的所有子目录和文件
#   `777`: 是所有用户都拥有最高权限
```

### 2.`git@github.com: Permission denied (publickey). fatal: Could not read from remote repository.` 

**Solution:**
[https://www.jianshu.com/p/52c834781e85](https://www.jianshu.com/p/52c834781e85)

### 3.githun actions

**Solution:**
[GitHub Actions 入门教程](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
[github actions](https://blog.csdn.net/IndexMan/article/details/126185756)
