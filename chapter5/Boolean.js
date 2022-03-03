//falseObject 是true是因为不管Boolean 这个实例传入什么返回的值都是 true
let falseObject = new Boolean(false)
let result = falseObject && true
console.log(result); // true

let falseValue = false
result = falseValue && true
console.log(result); // false