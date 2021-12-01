let person = new Object()
function setName(obj){
  // person.name = 'Nicholas'
  // person = new Object()
  obj.name = 'Nicholas'
  obj = new Object()
  obj.name = 'Greg'
}

setName(person)
console.log(person.name);


