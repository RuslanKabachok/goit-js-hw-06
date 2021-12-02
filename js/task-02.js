const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = (arr) => {
  const listEl = document.getElementById('ingredients');
  for (const el of arr) {
    const liEl = document.createElement('li');
    liEl.textContent = el;
    liEl.classList.add('item');
    listEl.append(liEl);
  }
};
createList(ingredients);
