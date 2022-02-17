// 属性

// const pattern1 = /\[bc\]at/i
// console.log(pattern1.global)
// console.log(pattern1.ignoreCase)
// console.log(pattern1.dotAll)
// console.log(pattern1.flags)
// console.log(pattern1.lastIndex)
// console.log(pattern1.multiline)
// console.log(pattern1.source)
// console.log(pattern1.unicode)
// console.log(pattern1.sticky)

// const pattern2 = new RegExp('\\[bc\\]at', 'i')
// console.log(pattern2.global)
// console.log(pattern2.ignoreCase)
// console.log(pattern2.dotAll)
// console.log(pattern2.flags)
// console.log(pattern2.lastIndex)
// console.log(pattern2.multiline)
// console.log(pattern2.source)
// console.log(pattern2.unicode)
// console.log(pattern2.sticky)

// 方法

// exec

// 不加g 永远只匹配第一个
let text = 'cat, bat, sat, fat'

let pattern = /.at/

// let matches = pattern.exec(text) 
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// matches = pattern.exec(text)
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// 加g 每次调用exec 都会向前搜索下一个匹配项
// pattern = /.at/g

// let matches = pattern.exec(text) 
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// matches = pattern.exec(text)
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// matches = pattern.exec(text)
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// 加y 之后只会紧跟在lastIndex 后面进行匹配
// pattern = /.at/y

// let matches = pattern.exec(text) 
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

//这里matche是null
// matches = pattern.exec(text)
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// pattern.lastIndex = 5
// matches = pattern.exec(text)
// console.log(matches.index)
// console.log(matches[0])
// console.log(pattern.lastIndex)

// test 返回true or false

// text = '000-00-0000'

// pattern = /\d{3}-\d{2}-\d{4}/

// if(pattern.test(text)){
//   console.log('The pattern was matched.')
// }

// toLocaleString toString

pattern = new RegExp('\\[bc\\]at', 'gi')
console.log(pattern.toString())
console.log(pattern.toLocaleString())
console.log(pattern.valueOf())