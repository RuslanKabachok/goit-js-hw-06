let counterValue = 0;
const refs = {
  decrementButtonEl: document.querySelector('button[data-action="decrement"]'),
  incrementButtonEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

const increaseValue = () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;

  console.log(counterValue);
};
const decreaseValue = () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;

  console.log(counterValue);
};

refs.decrementButtonEl.addEventListener('click', decreaseValue);
refs.incrementButtonEl.addEventListener('click', increaseValue);
