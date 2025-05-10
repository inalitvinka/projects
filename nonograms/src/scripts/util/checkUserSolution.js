import modal from "../plugins/modal";
import globalVars from "./variables";
import convertTime from "./convertTime";
import data from "./data";
import saveWinGame from "./saveWinGame";
import playAudio from "./playAudio";

const checkUserSolution = () => {
  let solution = [];
  for (let i = 0; i < globalVars.components.gameCells.length; i++) {
    if (globalVars.components.gameCells[i].classList.contains('active')) {
      solution.push(1);
    } else {
      solution.push(0);
    }
  }
  if (solution.join('') === data[globalVars.category][globalVars.index].nonogram.flat().join('')) {
    modal.setContent('Great! You solved the nonogram', `"${data[globalVars.category][globalVars.index].name}" in ${convertTime(globalVars.minutes, globalVars.seconds)} seconds!`);
    modal.open();
    clearInterval(globalVars.interval);
    saveWinGame();
    globalVars.isVictory = true;
    globalVars.components.save.disabled = true;
    globalVars.components.gameField.style.pointerEvents = "none";
    if (globalVars.isVictory && !globalVars.isMuted) {
      playAudio(require('../../assets/audio/winning-sound.mp3'));
    }
  }
}

export default checkUserSolution
