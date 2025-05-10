import globalVars from "./variables";
import checkUserSolution from "./checkUserSolution";
import changeNonogram from "./changeNonogram";
import playAudio from "./playAudio";
import startTimer from "./startTimer";

const handleCellClick = () => {
  globalVars.components.gameField.addEventListener('click', event => {
    const target = event.target;
    if (target.classList.contains('game-cell')) {
      if (!globalVars.isStart) {
        globalVars.isStart = true;
        changeNonogram();
        startTimer();
      }
      if (!globalVars.isMuted && !event.target.classList.contains('active')) {
        playAudio(require('../../assets/audio/fieldClick.mp3'));
      } 
      if (!globalVars.isMuted && target.classList.contains('active')) {
        playAudio(require('../../assets/audio/delete-sign.mp3'));
      }
      if (target.classList.contains('cross')) {
        target.classList.remove('cross');
      }
      target.classList.toggle('active');
      checkUserSolution();
    }
  })
  globalVars.components.gameField.addEventListener('contextmenu', event => {
    event.preventDefault();
    if (!globalVars.isStart) {
      globalVars.isStart = true;
      startTimer();
      if (globalVars.components.save.disabled) globalVars.components.save.disabled = false;
      if (globalVars.components.reset.disabled) globalVars.components.reset.disabled = false;
    }
    const target = event.target;
    if (!globalVars.isMuted && !event.target.classList.contains('cross')) {
      playAudio(require('../../assets/audio/fieldClick2.mp3'));
    }
    if(!globalVars.isMuted && target.classList.contains('active')) {
      target.classList.remove('active');
    }
    if (!globalVars.isMuted && target.classList.contains('cross')) {
      playAudio(require('../../assets/audio/delete-sign.mp3'));
    }
    target.classList.toggle('cross');
  })
}

export default handleCellClick
