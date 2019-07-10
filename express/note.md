express 是一个简单的nodeJS web应用框架，可以快速搭建一个web应用出来

他并不是nodeJS自带的，需要通过npm安装

`npm install express --save`

创建一个服务


**路由**
点击按钮跳转其他路径，路由决定“谁”去响应客户端的请求

**静态目录**
express 内置express.static来设置静态目录，
用来访问你目录中的html、js、css、img...等等静态文件

语法：app.use(express.static('目录名'))

body-parse 这是一个解析器，用来解析不同类型的请求体
application/x-www-form-urlencoded form提交数据的格式的编码类型，被编码为键值对格式
multipart/form-data form提交数据的格式的编码类型

bodyParse.urlencoded() 用来解析request中body中的urlcoded字符 只支持UTF-8