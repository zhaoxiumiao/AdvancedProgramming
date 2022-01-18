// Date 一些常用方法

const now = new Date()

// 年
const year = now.getFullYear()
// 月 0-11
const month = now.getMonth()
// 日 
const date = now.getDate()
// 周 0-6
const day = getDayName(now.getDay())
// 时
const hour = now.getHours()
// 分
const minutes = now.getMinutes()
// 秒
const seconds = now.getSeconds()
// 毫秒
const milliseconds = now.getMilliseconds()

console.log(`${year}年 ${month + 1}月 ${date}日 ${hour}时 ${minutes}分 ${seconds}秒 ${milliseconds}毫秒`);
console.log(day);

function getDayName(day){
  let name = null
  switch(day){
    case 0:
      name = '星期日'
      break
    case 1:
      name = '星期一'
      break
    case 2:
      name = '星期二'
      break
    case 3:
      name = '星期三'
      break
    case 4:
      name = '星期四'
      break
    case 5:
      name = '星期五'
      break
    case 6:
      name = '星期六'
      break
  }
  return name
}
