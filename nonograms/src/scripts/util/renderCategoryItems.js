import data from "./data";
import globalVars from "./variables";
import createElement from "./createElement";

const renderCategoryItems = active => {
  const removePrevItems = () => {
    if (globalVars.components.categories.length) {
      for (let i = 0; i < globalVars.components.categories.length; i++) {
        globalVars.components.categories[i].remove();
      }
      globalVars.components.categories.length = 0;
    }
  }
  const currentCategoryArray = data[active];
  const renderItems = arr => {
    removePrevItems();
    arr.forEach((item, index) => {
      const categoryItem = createElement({
        tag: 'div',
        classes: ['category-item'],
        textContent: `${item.name}`,
      })
      categoryItem.setAttribute('data-id', `${item.id}`);
      categoryItem.style = `--number:${index};`;
      if (index === globalVars.index) {
        categoryItem.classList.add('category-item__active');
      } else {
        categoryItem.classList.remove('category-item__active');
      }
      globalVars.components.categories.push(categoryItem);
      globalVars.components.categoryItems.append(categoryItem);
    })
  }
  renderItems(currentCategoryArray);
} 
export default renderCategoryItems
