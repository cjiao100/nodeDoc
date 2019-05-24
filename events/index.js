const events = require('events')

// 声名一个eventEmitter对象
const eventEmitter = new events.EventEmitter()

// 创建自定义事件
eventEmitter.on('aaa', () => {
    console.log('aaa事件触发')

    // 触发自定义事件
    eventEmitter.emit('bbb')
})

// 创建自定义事件
eventEmitter.on('bbb', () => {
    console.log('bbb事件触发')
})


// 触发自定义事件
eventEmitter.emit('aaa')

console.log('-------------')
console.log('已执行')