// let num1 = 25
// 0000 0000 0000 0000 0000 0000 0001 1001 = 25
// 0000 0000 0000 0000 0000 0000 0000 0011 = 3 
// 按位非(~)
// let num2 = ~num1
// 1111 1111 1111 1111 1111 1111 1110 0110
// 按位与(&)
// let num2 = num1 & 3
// 0000 0000 0000 0000 0000 0000 0000 0001 = 1 
// 按位或(|)
// let num2 = num1 | 3
// 0000 0000 0000 0000 0000 0000 0001 1011 = 1 
// 按位异或(^) 同为0 异为1
// let num2 = num1 ^ 3
// 0000 0000 0000 0000 0000 0000 0001 1010 = 1 
// console.log(num2);
// 左移
// let oldValue = 2
// let newValue = oldValue << 5
// console.log(newValue);
// 右移
// let oldValue = 64
// let newValue = oldValue >> 5
// console.log(newValue);
// 无符号右移
let oldValue = -64
let newValue = oldValue >>> 5
console.log(newValue);