import globalVars from "./variables";

const resetGame = () => {
  globalVars.components.gameCells.forEach(item => {
    if (item.classList.contains('active') || item.classList.contains('cross')) {
      item.classList.remove("active");
      item.classList.remove("cross");
    }
  })
  clearInterval(globalVars.interval);
  globalVars.minutes = 0;
  globalVars.seconds = 0;
  globalVars.components.minDisplay.textContent = '00';
  globalVars.components.secDisplay.textContent = '00';
  globalVars.components.gameField.style.pointerEvents = "auto";
  if (!globalVars.components.reset.disabled) globalVars.components.reset.disabled = true;
  globalVars.isStart = false;
}
export default resetGame
