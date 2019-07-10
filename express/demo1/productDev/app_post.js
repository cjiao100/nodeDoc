// 设置静态目录文件

const express = require('express')
const app = express();
// post 使用body-parse
const bodyParser = require('body-parser')

// console.log(app)
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'))

app.get('/', (req, res) => {
    // 指定文件路径
    res.sendFile(__dirname + '/index.html')
    res.end()
}).post('/process_post', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.write(`name = ${req.body.namex}, age = ${req.body.agex}`)
    res.end();
}).listen(5878, () => {
    console.log('第一个静态目录')
})