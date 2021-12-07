const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');
const lis = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const el = ingredients[i];

  const liEl = document.createElement('li');
  liEl.textContent = el;
  liEl.classList.add('item');
  lis.push(liEl);
}

listEl.append(...lis);
