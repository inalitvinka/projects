import words from "./data";
import updateDisplay from "./updateDisplay";
import variables from "./variables";

const initGame = () => {
  const currentObj = words[Math.floor(Math.random() * (words.length))];
  variables.currentWord = currentObj.word;
  console.log(`for crosscheck: ${variables.currentWord}`);
  const DISPLAY_HINT = document.querySelector('.display-hint');
  DISPLAY_HINT.textContent = currentObj.hint;
  variables.correctLettersArr.length = 0;
  variables.wrongLettersCounter = 0;
  updateDisplay(variables.wrongLettersCounter);
  document.querySelectorAll('.picture').forEach(item => item.classList.remove('gallow-active'));
  document.querySelectorAll('.key-btn').forEach(item => item.disabled = false);
}

export default initGame;
