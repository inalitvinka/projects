import globalVars from "./variables";
import resetGame from "./resetGame";

const showSolution = () => {
  resetGame();
  const currentGameField = document.querySelectorAll('.game-cell');
  currentGameField.forEach(item => {
    if (+item.dataset.index) item.classList.add('active');
  })
  globalVars.components.gameField.style.pointerEvents = "none";
}
export default showSolution
