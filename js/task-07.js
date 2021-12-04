const refs = {
  inputEL: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

const fontSize = (refs.textEl.style.fontSize = '20px');

const onInputChange = (event) => {
  fontSize == event.currentTarget.value;
};

refs.inputEL.addEventListener('input', onInputChange);
