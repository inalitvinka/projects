import globalVars from "./variables";

const showActiveLevel = () => {
  globalVars.components.levelBtns.forEach(item => {
  if (item.textContent === globalVars.category) {
    item.classList.add('category-active');
    item.disabled = true;
  } else {
    item.classList.remove('category-active');
    item.disabled = false;
  }
    
  })
  globalVars.components.categories.forEach(item => {
    if (item.dataset.category === globalVars.category) {
      item.classList.add('category-active');
      item.disabled = true;
    } else {
      item.classList.remove('category-active');
      item.disabled = false;
    }
  })
}
export default showActiveLevel

