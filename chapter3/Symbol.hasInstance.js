// function Foo () {}
// let f = new Foo()
// console.log(Foo[Symbol.hasInstance](f));
// console.log(f instanceof Foo);

// class Bar{}
// let b = new Bar()
// console.log(Bar[Symbol.hasInstance](b));
// console.log(b instanceof Bar);

class Bar {}
class Baz extends Bar{
  static [Symbol.hasInstance] (){
    return false
  }
}
let b = new Baz()

console.log(Bar[Symbol.hasInstance](b));
console.log(b instanceof Bar);
console.log(Baz[Symbol.hasInstance](b));
console.log(b instanceof Baz);