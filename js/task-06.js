const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur(){
    if( inputRef.value.length ===Number(inputRef.dataset.length)){
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
      
    }
    else{
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    }
}

onInputBlur()

console.log(inputRef)



