class Emitter {
  constructor(max){
    this.max = max
    this.syncIdx = 0
    this.asyncIdx = 0
  }

  * [Symbol.iterator]() {
    while(this.max > this.syncIdx){
      // yield this.syncIdx++
      yield new Promise((resolve)=> {
        resolve(this.syncIdx++)
      })
    }
  }

  async *[Symbol.asyncIterator] (){
    while(this.max > this.asyncIdx) {
      yield new Promise((resolve)=> {
        setTimeout(() => {resolve(this.asyncIdx++);}, Math.floor(Math.random() * 1000))
        // resolve(this.asyncIdx++);
      })
      // if(this.asyncIdx < 3) {
      //   yield this.asyncIdx++
      // } else {
      //   throw 'Exited loop'
      // }
    }
  }
}

const emitter = new Emitter(5)

function syncCount () {
  const syncCounter = emitter[Symbol.iterator]()
  for(const x of syncCounter){
    console.log(x);
  }
}

(async function asyncCount(){
  const asyncCounter = emitter[Symbol.asyncIterator]()

  // asyncCounter.next().then(res=> console.log(res.value))
  for await (const x of asyncCounter){
    console.log(x);
  }
})()

// syncCount()

// asyncCount()

console.log(11111);