function $say() {
    // this.init()
}

$say.prototype = {
    init() {
        console.log('init')
    },
    aa(n) {
        console.log(n)
    }
}

module.exports = $say