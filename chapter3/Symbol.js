// let sym = Symbol('fool')
// console.log(typeof sym);

// let fool = Symbol('fool'),
//     fool1 = Symbol('bar'),
//     fool2 = Symbol('baz'),
//     fool3 = Symbol('fool')



// let o = {
//   [fool]: 'fool value'
// }

// Object.defineProperties(o, {
//   [fool]: {value: 'fool1 value'},
//   [fool2]: {value: 'fool2 value'}
// })

// Symbol.asyncIterator

// console.log(Reflect.ownKeys(o));
// console.log(o[fool]);
// console.log(fool3 == fool);

// 书中案例
class Emitter {
  constructor (max){
    this.max = max
    this.asyncIdx = 0
  }

  async * [Symbol.asyncIterator] () {
    while(this.max > this.asyncIdx){
      yield new Promise((resolve) => resolve(this.asyncIdx++))
    }
  }
}

async function asyncCount () {
  let emitter = new Emitter(5)
  for await (const x of emitter){
    console.log(x);
  }
}

asyncCount()
