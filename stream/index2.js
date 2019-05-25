const fs = require('fs')

let data = "这是要写入的内容"

// 创建一个写入流
let writeStream = fs.createWriteStream('xx_123.txt')

// 设置写入编码格式
writeStream.write(data, 'utf8')

// 标记结束写入
writeStream.end()

writeStream.on('finish', () => {
    console.log('写完了')
})

writeStream.on('err', err => {
    console.log(err)
})