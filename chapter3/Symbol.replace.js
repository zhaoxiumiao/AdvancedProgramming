// console.log(RegExp.prototype[Symbol.replace]);
// console.log('foobarbaz'.replace(/bar/, 'qux'));

// class FooReplacer {
//    static [Symbol.replace] (target, replaecment){
//      return target.split('foo').join(replaecment)
//    }
// }

// console.log('barfoobaz'.replace(FooReplacer, 'qux'));

class FooReplacer {
  constructor (str) {
    this.str = str
  }

  [Symbol.replace] (target, replacement){
    return target.split(this.str).join(replacement)
  }
}

console.log('barfoobaz'.replace(new FooReplacer('foo'), 'qux'));