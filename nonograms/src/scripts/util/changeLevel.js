import data from "./data";
import globalVars from "./variables";
import renderGameField from "./renderGameField";
import renderCategoryItems from "./renderCategoryItems";
import changeNonogram from "./changeNonogram";
import playAudio from "./playAudio";
import resetGame from "./resetGame";

const changeLevel = () => {
  const TABS = globalVars.components.levelBtns;
  TABS.forEach(item => item.addEventListener('click', event => {
    if (!globalVars.isMuted && !item.classList.contains('category-active')) playAudio(require('../../assets/audio/click.mp3'));
    globalVars.components.gameField.style.pointerEvents = "auto";
    resetGame();
    globalVars.components.save.disabled = true;
    if (!globalVars.components.reset.disabled) globalVars.components.reset.disabled = true;
    TABS.forEach(item => {
        item.classList.remove('category-active');
        item.disabled = false;
    })
    item.classList.add('category-active');
    item.disabled = true;
    const tabType = event.target.textContent;
    globalVars.category = tabType;
    globalVars.index = 0;
    renderCategoryItems(tabType);
    renderGameField(data[globalVars.category][globalVars.index]);
    changeNonogram();
  }))
}

export default changeLevel
