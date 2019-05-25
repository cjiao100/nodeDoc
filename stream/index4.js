// 压缩文件

const fs = require('fs')
const zlib = require('zlib')

// 压缩文件
fs.createReadStream('xx_123.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('xx_123.txt.gz'))

console.log('压缩完了')