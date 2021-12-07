const inputEL = document.querySelector('#validation-input');
const inputElLength = inputEL.dataset.length;

const onBlurInput = (event) => {
  if (event.currentTarget.value.length === Number(inputElLength)) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
};

inputEL.addEventListener('blur', onBlurInput);
