import data from "./data";
import renderGameField from "./renderGameField";
import globalVars from "./variables";
import resetGame from "./resetGame";
import playAudio from "./playAudio";

const changeNonogram = () => {
  const ITEMS = globalVars.components.categories;
  ITEMS.forEach(item => item.addEventListener('click', event => {
    if (!globalVars.isMuted && !item.classList.contains('category-item__active')) playAudio(require('../../assets/audio/click.mp3'));
    globalVars.components.gameField.style.pointerEvents = "auto";
    ITEMS.forEach(item => {
      item.classList.remove('category-item__active');
      item.disabled = false;
    });
    item.classList.add('category-item__active');
    item.disabled = true;
    const target = +event.target.dataset.id;
    globalVars.index = target - 1;
    const currentNonogram = data[globalVars.category].find(item => item.id === target);
    renderGameField(currentNonogram);
    resetGame();
  }))
}

export default changeNonogram
