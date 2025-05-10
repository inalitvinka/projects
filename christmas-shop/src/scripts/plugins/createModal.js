import createElement from './createElement';

const styles = {
  modal: 'modal',
  overlay: 'modal-overlay',
  window: 'modal-window',
  button: 'modal-button',
  btn: 'modal-btn',
}
const createModal = options => {
  const modal = createElement('div', styles.modal, null);
  modal.insertAdjacentHTML('afterbegin', `
    <div class="${styles.overlay}" data-close="true"> 
      <div class="${styles.window}" data-content="content">
        <div class="${styles.button}">
          <button class="${styles.btn}" data-close="true">&times;</button>
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal);
  return modal;
}
export default createModal;
