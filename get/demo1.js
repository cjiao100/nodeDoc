const http = require('http')
const url = require('url')
const util = require('util')

const server = http.createServer((req, res) => {
    // 设置请求头的信息
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })

    // url.parse()把url分成很多的对象
    console.log(url.parse(req.url))
    // util.inspaect 把对象转为字符串
    let text = util.inspect(url.parse(req.url))
    res.end(text);

}).listen(8080)