// 读取流
const fs = require('fs')

let data = ''
// 创建一个可读流
let readStream = fs.createReadStream('stream_text.txt')

// 设置编码格式
readStream.setEncoding('utf8')

// console.log(readStream)

readStream.on('data', _d => {
   data += _d
})

readStream.on('end', () => {
    console.log(data)
})

readStream.on('error', err => {
    console.log(err)
})

console.log('执行完毕')