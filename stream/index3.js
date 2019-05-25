// 管道流

const fs = require('fs')

const readStream = fs.createReadStream('xx_123.txt')
const writeStream = fs.createWriteStream('xx_123_2.txt')

readStream.pipe(writeStream)

console.log('执行完毕')