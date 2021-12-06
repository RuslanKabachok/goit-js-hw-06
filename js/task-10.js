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
    const size = 30 + i * 10;
    // divEl.textContent = 'Hurra!';
    divEl.style.color = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    refs.boxesEl.append(divEl);
  }
};

const ondestroyBtnEl = () => {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
};

refs.createBtnEl.addEventListener('click', oncreateBtnElClick);
refs.destroyBtnEl.addEventListener('click', ondestroyBtnEl);
