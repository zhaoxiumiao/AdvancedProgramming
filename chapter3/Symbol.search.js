// console.log(RegExp.prototype[Symbol.search]);
// console.log('foobar'.search(/bar/));

// class FooSearcher {
//   static [Symbol.search] (target) {
//     return target.indexOf('foo')
//   }
// }

// console.log('foobar'.search(FooSearcher));
// console.log('barfoo'.search(FooSearcher));
// console.log('barbaz'.search(FooSearcher));

class FooSearcher {
  constructor (str) {
    this.str = str
  }

  [Symbol.search] (target) {
    return target.indexOf(this.str)
  }
}

console.log('foobar'.search(new FooSearcher('foo')));
console.log('barfoo'.search(new FooSearcher('foo')));
console.log('barbaz'.search(new FooSearcher('qux')));
