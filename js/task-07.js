const refs = {
  inputEL: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

const onInputChange = (event) => {
  refs.textEl.setAttribute(
    'style',
    `font-size: ${event.currentTarget.value}px`
  );
};

refs.inputEL.addEventListener('input', onInputChange);
