import globalVars from './variables';
import playAudio from './playAudio';
import resetGame from './resetGame';
import showSolution from './showSolution';
import randomGame from './randomGame';
import showScore from './showScore';
import saveCurrentGame from './saveCurrentGame';
import continueSavedGame from './continueSavedGame';

const handlekMenuClick = () => {
  if (localStorage.getItem('game')) {
    globalVars.components.continue.disabled = false;
  } else {
    globalVars.components.continue.disabled = true;
  }
  if (globalVars.isStart) {
    globalVars.components.save.disabled = false;
  } else {
    globalVars.components.save.disabled = true;
  }
  globalVars.components.menuButtons.addEventListener('click', event => {
    const target = event.target.textContent;
    if (!globalVars.isMuted) playAudio(require('../../assets/audio/click.mp3'));
    if (target === 'reset') {
      globalVars.components.save.disabled = true;
      globalVars.components.reset.disabled = true;
      resetGame();
    }
    if (target === 'solution') {
      globalVars.components.save.disabled = true;
      showSolution();
      globalVars.components.reset.disabled = false;
    }
    if (target === 'random') {
      globalVars.components.save.disabled = true;
      globalVars.components.reset.disabled = true;
      randomGame();
    }
    if (target === 'save') {
      globalVars.components.save.disabled = true;
      globalVars.components.continue.disabled = false;
      saveCurrentGame();
    }
    if (target === 'score') {
      showScore();
    }
    if (target === 'continue') {
      resetGame();
      continueSavedGame();
      localStorage.removeItem('game');
      globalVars.components.continue.disabled = true;
      globalVars.components.reset.disabled = false;
      globalVars.components.save.disabled = true;
    }
  })
}
export default handlekMenuClick
