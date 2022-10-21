function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyColor = document.querySelector('body')
const colorRef = document.querySelector('.color')
const buttonRef = document.querySelector('.change-color')

buttonRef.addEventListener('click', changeColor)

function changeColor(event){
  const randomColor = getRandomHexColor()
  bodyColor.style.backgroundColor = randomColor
  colorRef.textContent =  bodyColor.style.backgroundColor
  // or
  // colorRef.textContent =  randomColor
}
