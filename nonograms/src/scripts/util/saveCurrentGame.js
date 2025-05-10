import globalVars from "./variables";

const saveCurrentGame = () => {
  const field = globalVars.components.gameField.innerHTML;
  const currentGame = {
    category: globalVars.category,
    index: globalVars.index,
    html: field,
    time: `${globalVars.components.minDisplay.textContent}:${globalVars.components.secDisplay.textContent}`,
    min: globalVars.components.minDisplay.textContent,
    sec: globalVars.components.secDisplay.textContent,
  }
  localStorage.setItem('game', JSON.stringify(currentGame));
}
export default saveCurrentGame
