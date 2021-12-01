// let num = 0
// for(let i = 1; i < 10; i++){
//   if(i % 5 == 0){
//     // break
//     continue
//   }
//   num++
// }
// console.log(num);

let num = 0
outermost:
for(let i = 0; i < 10; i++){
  for(let j = 0; j < 10; j++){
    if(i == 5 && j == 5){
      // break outermost
      // break
      // continue outermost
      continue
    }
    num ++
  }
}
console.log(num);