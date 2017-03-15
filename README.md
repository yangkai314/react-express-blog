#react-es6-webpack

##使用说明

> 开发时的环境

- Windows 10
- Node v6.10.0
- NPM v3.10.10

> 快速开始

```
$ npm install
$ npm start                     #启动程序并开启热替换
$ npm run release               #编译源代码产至dist目录
```

>技术栈
```
webpack+es6+react+sass
```

>目录结构说明
```
├──config                       #webpack配置
├──server                       #server代码
├──dist                         #项目产出目录
├──src                          #项目源代码
    ├──componets                #全局可复用公共组件
    ├──css                      #公共css
    ├──pages                    #页面
        ├──page1                #单个页面，命名可根据实际开发命名
        ...
    ├──index.html               #项目入口html
    ├──index.js                 #项目入口js
```

>2017.3.8
```
第一次提交
持续更新，后续会添加react-touter,redux
```

>2017.3.10
```
更新web-dev-server启动地址为 localhost:8000
加入了react-router初级应用
```

>2017.3.11
```
因localhost:8000只能使用localhost:8000或者127.0.0.1:8000访问app，
更新web-dev-server启动地址为 0.0.0.0:8000，这样也能使用本地ip来访问app(如192.106.0.108)
```
