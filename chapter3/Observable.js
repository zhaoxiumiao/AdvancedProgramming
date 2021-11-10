class Observable{
  constructor () {
    this.promiseQueue = []
    this.resolve = null
    this.enqueue()
  }

  enqueue() {
    this.promiseQueue.push(new Promise(resolve => this.resolve = resolve))
  }

  dequeue() {
    return this.promiseQueue.shift()
  }

  async * fromEvent(element, eventType){
    element.addEventListener(eventType, (event) => {
      this.resolve(event)
      this.enqueue()
    })

    while(1){
      yield await this.dequeue()
    }
  }
}
window.onload = () => {

  (async function() { 
    const observable = new Observable(); 
    const button = document.querySelector('button'); 
    const mouseClickIterator = observable.fromEvent(button, 'click'); 
    for await (const clickEvent of mouseClickIterator) { 
      setTimeout(()=>{
        console.log('helloWorld');
        console.log(Date.now()); 
      }, 1000)
    } 
  })();

}


