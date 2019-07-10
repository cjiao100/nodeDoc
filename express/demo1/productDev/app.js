// 设置静态目录文件
const express = require('express')
const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.end()
}).get('/process_get', (req, res) => {
    console.log(req.query)
    res.write(`name = ${req.query.name}, age = ${req.query.age}`)
    res.end();
}).listen(5878, () => {
    console.log('第一个静态目录')
})