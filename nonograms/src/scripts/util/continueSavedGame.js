import globalVars from "./variables";
import data from "./data";
import renderGameField from "./renderGameField";
import renderCategoryItems from "./renderCategoryItems";
import showActiveLevel from "./showActiveLevel";
import changeNonogram from "./changeNonogram";

const continueSavedGame = () => {
  const storedGame = JSON.parse(localStorage.getItem('game'));
  globalVars.category = storedGame.category;
  globalVars.index = storedGame.index;
  globalVars.minutes = storedGame.min;
  globalVars.seconds = storedGame.sec;
  globalVars.components.minDisplay.textContent = storedGame.min;
  globalVars.components.secDisplay.textContent = storedGame.sec;
  renderCategoryItems(globalVars.category);
  renderGameField(data[globalVars.category][globalVars.index]);
  globalVars.components.gameField.innerHTML = storedGame.html;
  changeNonogram ();
  showActiveLevel();
}
export default continueSavedGame
