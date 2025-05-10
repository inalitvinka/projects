import createModal from './createModal';
import globalVars from '../util/variables';
import playAudio from '../util/playAudio';

const modalWindow = options => {
  const TRANSITION_SPEED = 500;
  const $modal = createModal(options);
  let isClosing = false;
  const modal = {
    open() {
      !isClosing && $modal.modal.classList.add('open');
      !isClosing && document.body.classList.add('lock');
    },
    close() {
      isClosing = true;
      $modal.modal.classList.remove('open');
      $modal.modal.classList.add('hiding');
      document.body.classList.remove('lock');
      $modal.modal.classList.add('hiding');
      setTimeout(() => {
        $modal.modal.classList.remove('hiding');
        isClosing = false;
      }, TRANSITION_SPEED);
    },
    setContent(title, content) {
      $modal.modalTitle.innerHTML = title;
      $modal.modalContent.innerHTML = content;
    }
  }
  const listener = event => {
    if (!globalVars.isMuted && event.target.dataset.close) playAudio(require('../../assets/audio/close.mp3'));
    if (event.target.dataset.close) modal.close();
  }
  $modal.modal.addEventListener('click', listener);
  return modal;
}
const modal = modalWindow();
export default modal
