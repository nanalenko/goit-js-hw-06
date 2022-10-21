function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};


refs.btnCreate.addEventListener('click', onInputValue);
refs.btnDestroy.addEventListener('click', onDestroyBoxes);


function createDivBox() {
  return document.createElement('div');
}


function onInputValue() {
  const inputValue = refs.input.value;

  createBoxes(inputValue);
}


function createBoxes(amount) {
  const newBoxesArr = [];
  let boxWidth = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = createDivBox();

    boxWidth += 10;
    newBox.style.width = `${boxWidth}px`;
    newBox.style.height = `${boxWidth}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    newBoxesArr.push(newBox);
  }

  refs.boxes.append(...newBoxesArr);
}


function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = 1;
}
