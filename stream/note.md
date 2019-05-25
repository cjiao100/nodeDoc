# stream 流

四种类型
+ 读 Readable
+ 写 Writeabl
+ 可读，可写 Duplex
+ 被写入，读出结果 Transform

四个事件
+ data 有数据可读时触发
+ end 没有数据可读时触发
+ error 有错时触发
+ finish 所有数据被写入时触发

## 管道流
从一个流中获取数据，传递到另一个流中

pipe()

## 链式流
在管道流的基础上，从一个输出流到一个或多个流

### 压缩文件

createGzip()

###　解压缩

createGunzip()