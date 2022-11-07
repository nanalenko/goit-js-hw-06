// const list =document.querySelector('#categories');
// const listItems = list.querySelectorAll('li.item');
//  console.log(`Number of categories :${listItems.length}`);

// const amount = () => {
//   listItems.forEach(item=>{
//     const firstEl = item.firstElementChild;
//     const lastEl = item.lastElementChild;

//   console.log("Category :",firstEl.textContent);
//   console.log("Elements:",lastEl.children.length);
//     }   
//  ) 
// }
// amount()

const list = document.querySelector('#categories');
const items = list.querySelectorAll('.item');
console.log(`В списке ${items.length} категории:`);
items.forEach(node => {
const h2 = node.querySelector('h2');
const nodeItems = node.querySelectorAll('li');
console.log(` - категория: ${h2.textContent} (количество элементов: ${nodeItems.length})`);
});
 

