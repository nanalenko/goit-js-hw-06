const output = document.querySelector('#name-output')
const input = document.querySelector('#name-input')

input.addEventListener("input", eventCallBack)
function eventCallBack(event){
event.preventDefault()

output.textContent = event.currentTarget.value === ""
? "Anonymos"
: event.currentTarget.value


console.log(output)
}
