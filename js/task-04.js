let  counterValue = 0;
const click = 1;

const dataDecrement = document.querySelector('[data-action="decrement"]');
const dataIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

dataDecrement.addEventListener('click', () => {
counterValue -= click;
value.textContent = counterValue; 

});

dataIncrement.addEventListener('click', () =>{
    counterValue += click;
    value.textContent = counterValue;
});