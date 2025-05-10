import data from "./data";
import renderCategoryItems from "./renderCategoryItems";
import globalVars from "./variables";
import renderGameField from "./renderGameField";
import resetGame from "./resetGame";
import changeNonogram from "./changeNonogram";

const randomGame = () => {
  const categories = ["easy", "medium", "hard"];
  let currentCategoryIndex = categories.indexOf(globalVars.category);
  let randomCategoryIndex;
  do {
    randomCategoryIndex = Math.floor(Math.random() * categories.length);
  } while (randomCategoryIndex === currentCategoryIndex);
  globalVars.category = categories[randomCategoryIndex];
  globalVars.index = Math.floor(Math.random() * data[globalVars.category].length);
  let currentNonogram = data[globalVars.category][globalVars.index];
  const LEVEL_TABS = globalVars.components.levelBtns;
  for (let i = 0; i < LEVEL_TABS.length; i++) {
    if (LEVEL_TABS[i].textContent === globalVars.category && !LEVEL_TABS[i].disabled) {
      LEVEL_TABS[i].classList.add("category-active");
      LEVEL_TABS[i].disabled = true;
    } else {
      LEVEL_TABS[i].classList.remove("category-active");
      LEVEL_TABS[i].disabled = false;
    }
  }
  resetGame();
  renderCategoryItems(globalVars.category);
  renderGameField(currentNonogram);
  changeNonogram();
}
export default randomGame
