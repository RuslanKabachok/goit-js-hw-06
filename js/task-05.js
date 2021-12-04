const refs = {
  inputEl: document.querySelector('#name-input'),
  nameEl: document.querySelector('#name-output'),
};

const onInput = (event) => {
  refs.nameEl.textContent = event.currentTarget.value;
};

// const onInputBlur = (event) => {
//   refs.nameEl.textContent = 'Anonymous';
// };

refs.inputEl.addEventListener('input', onInput);
// refs.inputEl.addEventListener('blur', onInputBlur);
