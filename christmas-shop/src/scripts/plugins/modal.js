import createModal from "./createModal";

const modalWindow = options => {
  const TRANSITION_SPEED = 500;
  const $modal = createModal(options);
  let isClosing = false;
  const modal = {
    open() {
      !isClosing && $modal.classList.add('open');
      !isClosing && document.body.classList.add('lock');
    },
    close() {
      isClosing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hiding');
      document.body.classList.remove('lock');
      $modal.classList.add('hiding');
      setTimeout(() => {
        $modal.classList.remove('hiding');
        isClosing = false;
      }, TRANSITION_SPEED);
    },
    setContent(content) {
      $modal.querySelector('[data-content]').innerHTML = content;
    }
  }
  const listener = event => {
    if (event.target.dataset.close) modal.close();
  }
  $modal.addEventListener('click', listener);
  return modal;
}
const modal = modalWindow();
export default modal;
