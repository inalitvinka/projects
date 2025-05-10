import createModal from './createModal';

const modalWindow = () => {
  const TRANSITION_SPEED = 500;
  const $modal = createModal();
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
    setContent(title, content = 'you\'ve lost on this one') {
      $modal.querySelector('[data-content]').textContent = title;
      $modal.querySelector('[data-title]').textContent = content;
    }
  }
  return modal;
}
const modal = modalWindow();
export default modal;
