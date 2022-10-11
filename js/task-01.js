const list =document.querySelector('#categories');
const listItems = list.querySelectorAll('li.item');
 console.log(`Number of categories :${listItems.length}`);

const amount = () => {
  listItems.forEach(item=>{
    const firstEl = item.firstElementChild;
    const lastEl = item.lastElementChild;

  console.log("Category :",firstEl.textContent);
  console.log("Elements:",lastEl.children.length);
    }   
 ) 
}
amount()


