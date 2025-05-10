import modal from "../plugins/modal";
import variables from "./variables";

const showGuessedWord = () => {
  const DISPLAY_WORD = document.querySelector('.display-word');
  const CONGRATS = 'congrats, you\'ve won';
  const currentHTML = variables.currentWord
    .split('')
    .map(item => variables.correctLettersArr.includes(item) ? item : item = '_')
    .join(' ');
  DISPLAY_WORD.textContent = currentHTML;
  if (!currentHTML.includes('_')) {
    modal.setContent(variables.currentWord, CONGRATS);
    modal.open();
  }
}
export default showGuessedWord;
