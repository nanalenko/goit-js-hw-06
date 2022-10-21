const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl=document.querySelector("#ingredients");


const createEls = ()=>{
  let arr=[];
  ingredients.map(elem => {
    const el = document.createElement('li');
    el.textContent = elem;
    el.classList.add("item");
    
    arr.push(el);
    console.log(el)
  })
  listEl.append(...arr)

}

createEls()