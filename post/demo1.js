const http = require('http')
const querystring = require('querystring')

const html = `<form method='post'>
    <label for='name'>姓名：</label>
    <input id='name' type='text' placeholder='请输入姓名' name='username'>
    <br>
    <label for='password'>密码：</label>
    <input id='password' type='password' name='userpwd'>
    <br>
    <button type='submit'>登录</button>
</form>`

http.createServer((req, res) => {
    let data = ''

    req.on('data', (d) => {
        data += d
    })

    req.on('end', () => {
        data = querystring.parse(data)

        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        })

        if(data.username && data.userpwd){
            res.write(`姓名：${data.username}\n 密码：${data.userpwd}`)
        } else {
            res.write(html)
        }

        res.end()
    })

}).listen(8080)