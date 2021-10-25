// let sym = Symbol('fool')
// console.log(typeof sym);

let fool = Symbol('fool'),
    fool1 = Symbol('bar'),
    fool2 = Symbol('baz'),
    fool3 = Symbol('fool')



let o = {
  [fool]: 'fool value'
}

Object.defineProperties(o, {
  [fool]: {value: 'fool1 value'},
  [fool2]: {value: 'fool2 value'}
})

// Symbol.asyncIterator

console.log(Reflect.ownKeys(o));
console.log(o[fool]);
console.log(fool3 == fool);


