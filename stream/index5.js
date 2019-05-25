// 压缩文件

const fs = require('fs')
const zlib = require('zlib')

// 压缩文件
fs.createReadStream('xx_123.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('xx_123_3.txt'))

console.log('压缩完了')