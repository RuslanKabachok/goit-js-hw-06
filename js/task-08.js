const refs = {
  formEl: document.querySelector('.login-form'),
  buttonEl: document.querySelector('button[type="submit"]'),
  emailEl: document.querySelector('input[type="email"]'),
  passwwordEl: document.querySelector('input[type="password"]'),
};

const onBtnSubmit = (event) => {
  event.preventDefault();

  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return alert('Поле не може бути пустим');
  } else {
    const objEl = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(objEl);
  }
  event.currentTarget.reset();
};

refs.formEl.addEventListener('submit', onBtnSubmit);
