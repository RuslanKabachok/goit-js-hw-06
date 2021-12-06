function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsEl: document.querySelector('#controls'),
  boxesEl: document.querySelector('#boxes'),
  inputEl: document.querySelector('input'),
  createBtnEl: document.querySelector('button[data-create]'),
  destroyBtnEl: document.querySelector('button[data-destroy]'),
};

const oncreateBtnElClick = (event) => {
  const amount = refs.inputEl.value;

  createBoxes(amount);
};

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    const size = 30;
    divEl.textContent = 'Hurra! It works';
    divEl.style.color = getRandomHexColor();
    const newSize = size + i * 10;
    // divEl.setAttribute('style', `width: ${newSize}px; height: ${newSize}px`);
    // divEl.setAttribute('style', `height: ${newSize}px`);     color: ${getRandomHexColor()}
    refs.boxesEl.append(divEl);
  }
};

const ondestroyBtnEl = () => {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
};

refs.createBtnEl.addEventListener('click', oncreateBtnElClick);
refs.destroyBtnEl.addEventListener('click', ondestroyBtnEl);
