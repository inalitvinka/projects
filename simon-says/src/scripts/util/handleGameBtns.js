import vars from "./globalVars";
import showSequence from "./showSequence";
import generateRandomSequence from "./generateRandomSequence";
import setDisabledKeyboard from "./disableKeyboard";

const handleGameBtns = (components) => {
  const _updateCurrentRound = () => components.currentRound.textContent = vars.currentRound;
  const ATTEMPTS = 2;
  const INIT_SEQUENCE_LENGTH = 2;
  document.addEventListener('click', event => {
    const target = event.target.dataset.btn;
    if (target === 'repeat') {
      vars.attempts -= 1;
      components.repeatBtn.disabled = true;
      components.output.textContent = '';
      vars.userInputArr.length = 0;
      showSequence(vars.sequence, components);
    }
    if (target === 'start') {
      vars.attempts = ATTEMPTS;
      generateRandomSequence(components);
      vars.currentRound += 1;
      _updateCurrentRound();
      showSequence(vars.sequence, components);
      components.startBtn.classList.add('hidden');
      components.repeatBtn.classList.remove('hidden');
      components.newGameBtn.classList.remove('hidden');
      components.roundsCounter.classList.remove('hidden');
      components.output.classList.remove('hidden');
      [...components.nav.children].forEach(item => item.disabled = true);
      components.repeatBtn.disabled = true;
      components.newGameBtn.disabled = true;
    }
    if (target === 'next') {
      components.output.textContent = '';
      vars.userInputArr.length = 0;
      vars.currentRound += 1;
      vars.sequenceLength += 2;
      vars.attempts = ATTEMPTS;
      _updateCurrentRound();
      generateRandomSequence(components);
      showSequence(vars.sequence, components);
      components.nextBtn.classList.add('hidden');
      components.repeatBtn.classList.remove('hidden');
    }
    if (target === 'new game') {
      components.output.textContent = '';
      vars.userInputArr.length = 0;
      vars.attempts = ATTEMPTS;
      vars.currentRound = 0;
      vars.sequenceLength = INIT_SEQUENCE_LENGTH;
      _updateCurrentRound();
      components.startBtn.classList.remove('hidden');
      components.repeatBtn.classList.add('hidden');
      components.newGameBtn.classList.add('hidden');
      components.nextBtn.classList.add('hidden');
      components.roundsCounter.classList.add('hidden');
      components.output.classList.add('hidden');
      [...components.nav.children].forEach(item => item.disabled = false);
      setDisabledKeyboard(components);
    }
  })
}
export default handleGameBtns
