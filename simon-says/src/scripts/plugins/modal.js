import vars from "../util/globalVars";

const cssClasses = {
  OPEN: 'open',
  LOCK: 'lock',
  HIDE: 'hiding',

}
const modalWindow = () => {
  const TRANSITION_SPEED = 500;
  let isClosing = false;
  const modal = {
    open() {
      !isClosing && vars.modal.winwow.classList.add(cssClasses.OPEN);
      !isClosing && document.body.classList.add(cssClasses.LOCK);
    },
    close() {
      isClosing = true;
      vars.modal.winwow.classList.remove(cssClasses.OPEN);
      vars.modal.winwow.classList.add(cssClasses.HIDE);
      document.body.classList.remove(cssClasses.LOCK);
      vars.modal.winwow.classList.add(cssClasses.HIDE);
      setTimeout(() => {
        vars.modal.winwow.classList.remove(cssClasses.HIDE);
        isClosing = false;
      }, TRANSITION_SPEED);
    },
    setContent(result, content = 'Congrats! You\'ve won!') {
      vars.modal.modalContent.textContent = content;
      vars.modal.modalResult.textContent = result;
    }
  }
  const listener = event => {
    if (event.target.dataset.close || event.target.dataset.btn === 'new game') modal.close();
  }
  document.addEventListener('click', listener);
  return modal;
}
const modal = modalWindow();
export default modal
