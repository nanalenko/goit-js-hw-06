const inputRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

inputRef.addEventListener('input', onTextFont)

function onTextFont(event){
    textRef.style.fontSize = event.currentTarget.value +'px'
}
console.log(inputRef)