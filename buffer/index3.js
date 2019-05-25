let buf = Buffer.from([1,2,3,4])

let json = JSON.stringify(buf)

console.log(typeof json)

let jsonParse = JSON.parse(json)

console.log(typeof jsonParse)

console.log(buf.toString())
console.log(json)
console.log(jsonParse)