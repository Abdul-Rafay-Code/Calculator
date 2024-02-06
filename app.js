var a = document.getElementById("inp")

function  getNumber(val) {
  a.value += val
  
}
function removeWholeValue(val) {
  a.value = null
}

function removeValue(val) {
    var b = a.value.slice(0, a.value.length - 1)
  a.value = b 
}

function calculateValue(val) {
  a.value = eval(a.value)
}

function getRandomColor(val) {
  red = Math.floor(Math.random() * 110)
  green = Math.floor(Math.random() * 110)
  blue = Math.floor(Math.random() * 110)
  // console.log(red,green,blue)
  
  return `rgb(${red},${green},${blue})`
}
setInterval(() => {
  var y = document.querySelectorAll(".btn").forEach(element => {
    element.style.backgroundColor = getRandomColor()
    
  });
  var x = document.querySelector(".body")
  x.style.backgroundColor = getRandomColor()

  
}, 2000);
