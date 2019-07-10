// 引入
const express = require('express')
// 创建一个服务
const app = express()

app.get('/', (req, res) => {
    res.send('这是一个express demo');
    res.end();
}).listen(2587, () => {
    console.log('express demo start')
})

// console.log(app)