import showGuessedWord from "./showGuessedWord";
import variables from "./variables";

const updateDisplay = (wrongLettersCounter) => {
  document.querySelector(`.gallow-${wrongLettersCounter}`).classList.add('gallow-active');
  showGuessedWord();
  document.querySelector('.display-counter b').innerHTML = `${wrongLettersCounter} / ${variables.MAX_GUESS}`;
}
export default updateDisplay;
