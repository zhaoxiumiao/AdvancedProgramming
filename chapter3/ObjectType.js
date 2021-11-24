class Bar {
  constructor(){
    this.idx = 10
  }
}

let o = new Bar()

console.log(o.idx);
console.log(o.hasOwnProperty('assign'));
console.log(Object.prototype.isPrototypeOf(Bar));
console.log(o.propertyIsEnumerable('idx'));
console.log(o.toLocaleString());
console.log(o.toString());
console.log(o.valueOf());