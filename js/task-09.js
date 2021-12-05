function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
};

const onButtonClick = () => {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  // refs.bodyEl.setAttribute('style', `background-color: ${getRandomHexColor()}`);

  refs.spanEl.textContent = refs.bodyEl.style.backgroundColor;
};

refs.buttonEl.addEventListener('click', onButtonClick);
