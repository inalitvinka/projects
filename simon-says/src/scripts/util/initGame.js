import setDisabledKeyboard from "./disableKeyboard";

const initGame = components => {
  setDisabledKeyboard(components);
  components.roundsCounter.classList.add('hidden');
  components.output.classList.add('hidden');
  components.repeatBtn.classList.add('hidden');
  components.newGameBtn.classList.add('hidden');
  components.nextBtn.classList.add('hidden');
}
export default initGame
