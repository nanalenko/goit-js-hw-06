const formRef = document.querySelector('.login-form')

formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event){
    event.preventDefault()
const onValueOfFields = event.currentTarget.elements

const email = onValueOfFields.email.value 
const password = onValueOfFields.password.value

const formData = {
    email, password
}

if (email === '' || password=== ''){
    alert('All fields must be hidden!!!')
}

console.log(formData)
event.currentTarget.reset()
}
