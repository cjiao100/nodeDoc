// 创建一个长度为5的Buffer实例，超出长度不保存
let buf1 = Buffer.alloc(55)
// 向缓冲中写入数据
buf1.write('我是 123')

// 读取缓存长度
console.log(buf1.length)
// 读取缓存数据
console.log(buf1.toString())