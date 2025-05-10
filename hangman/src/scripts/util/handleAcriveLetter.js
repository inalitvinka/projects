import updateDisplay from "./updateDisplay";
import modal from "../plugins/modal";
import variables from "./variables";

const handleActiveLetter = (activeLetter) => {
  if (variables.currentWord.includes(activeLetter)) {
    variables.correctLettersArr.push(activeLetter);
  } else {
    variables.wrongLettersCounter++;
    if (variables.wrongLettersCounter >= variables.MAX_GUESS) {
      variables.wrongLettersCounter = variables.MAX_GUESS;
      modal.setContent(variables.currentWord);
      modal.open();
    }
  }
  updateDisplay(variables.wrongLettersCounter);
};

export default handleActiveLetter;
