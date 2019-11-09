# Robin blog


## Development

```bash
yarn dev
yarn build
```

## Release
### 1.`windows`
```
Double click execution deploy.sh
```

### 2.`mac`
```
cd 'your local project directory'

./deploy.sh
```

## Access address

```
https://lotosv2010.github.io/blog/
```

## VuePress
[documentation](https://v1.vuepress.vuejs.org/).


## Common problem
### 1. `-bash: ./deploy.sh: Permission denied`
**Solution:**
```
$ sudo chmod -R 777 某一目录
```
> 其中:
>   `-R `:是指级联应用到目录里的所有子目录和文件
>   `777`: 是所有用户都拥有最高权限

### 2.`git@github.com: Permission denied (publickey). fatal: Could not read from remote repository.` 
**Solution:**
[https://www.jianshu.com/p/52c834781e85](https://www.jianshu.com/p/52c834781e85)