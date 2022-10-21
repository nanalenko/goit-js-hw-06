const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
 const imagesEl = document.querySelector('.gallery')
 console.log(imagesEl)

 const image = images.map( imgEl => `<li><img width = "300", src = "${imgEl.url}", alt = "${imgEl.alt}"></li>`).join(" ")
  imagesEl.insertAdjacentHTML("beforeend", image)

console.log(imagesEl.children)
const paramsEl = document.querySelector('li')

imagesEl.style.display="flex";
paramsEl.nextElementSibling.style.display="flex";
paramsEl.nextElementSibling.style.margin="10px"
paramsEl.style.display="flex";
paramsEl.style.margin="10px"
imagesEl.lastElementChild.style.display="flex";
imagesEl.lastElementChild.style.margin="10px"

