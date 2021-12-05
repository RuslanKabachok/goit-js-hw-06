const refs = {
  inputEL: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

// refs.textEl.style.fontSize = '30px';

const onInputChange = (event) => {
  // refs.textEl.style.fontSize === event.currentTarget.value;
  refs.textEl.setAttribute(
    'style',
    `font-size: ${event.currentTarget.value}px`
  );
  // refs.textEl.setAttribute('style', `font-size: ${event.target.value}px`);
};

refs.inputEL.addEventListener('input', onInputChange);
