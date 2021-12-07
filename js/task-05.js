const refs = {
  inputEl: document.querySelector('#name-input'),
  nameEl: document.querySelector('#name-output'),
};

const onInput = (event) => {
  if (event.currentTarget.value !== '') {
    refs.nameEl.textContent = event.currentTarget.value;
  } else {
    refs.nameEl.textContent = 'Anonymous';
  }
};

refs.inputEl.addEventListener('input', onInput);
