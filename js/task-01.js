const countAllLis = (obj) => {
  const allItemsEl = document.querySelectorAll('.item');
  console.log(`Number of categories: ${allItemsEl.length}`);
};
countAllLis();

const logTitle = (obj) => {
  const allTitlesEl = document.querySelectorAll('h2');
  for (const title of allTitlesEl) {
    console.log(`Category: ${title.textContent}`);
  }
};
logTitle();

const countAllCategories = (obj) => {
  const allUls = document.querySelectorAll('#categories ul');
  for (const ul of allUls) {
    console.log(`Elements: ${ul.children.length}`);
  }
};
countAllCategories();
