var color = 'blue'

function changeColor(){
  let anotherColor = 'red'
  function swapColors(){
    let tempColor = anotherColor
    anotherColor = color
    color = tempColor
  }
  swapColors()
}

changeColor()
console.log(color);