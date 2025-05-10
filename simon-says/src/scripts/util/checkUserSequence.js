import vars from "./globalVars";
import setDisabledKeyboard from "./disableKeyboard";
import modal from "../plugins/modal";

const checkUserSequence = (components) => {
  for (let i = 0; i < vars.userInputArr.length; i++) {
    if (vars.userInputArr[i] !== vars.reviewSequence[i] && vars.attempts) {
      vars.attempts -= 1;
      components.output.textContent = 'Wrong answer!';
      setDisabledKeyboard(components);
    }
    if (vars.userInputArr[i] !== vars.reviewSequence[i] && !vars.attempts) {
      modal.setContent(`Simon says: ${vars.reviewSequence.join('')}`, 'You\'ve lost!');
      modal.open();
      setDisabledKeyboard(components);
    }
    if (vars.userInputArr.length === vars.reviewSequence.length 
      && vars.userInputArr.join('') === vars.reviewSequence.join('')
      && vars.currentRound !== vars.roundsNumber) {
      components.output.textContent = 'Done!';
      components.nextBtn.classList.remove('hidden');
      components.repeatBtn.classList.add('hidden');
      setDisabledKeyboard(components)
    }
    if (vars.currentRound === vars.roundsNumber
      && vars.userInputArr.length === vars.reviewSequence.length 
      && vars.userInputArr.join('') === vars.reviewSequence.join('')) {
        modal.setContent(`Simon says: ${vars.reviewSequence.join('')}`);
        modal.open();
        setDisabledKeyboard(components);
        components.repeatBtn.disabled = true;
    }
  }
}
export default checkUserSequence
