const EventEmitter = require('events').EventEmitter

const event = new EventEmitter();

event.on('timeout', (n, m) => {
    console.log('时间到了就执行   '+ (m + n))
})

setTimeout(() => {
    event.emit('timeout', 1, 3)
}, 2000)


console.log('已经执行')