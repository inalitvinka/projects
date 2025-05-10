import createElement from '../util/createElement';
const styles = {
  modal: 'modal',
  overlay: 'modal-overlay',
  window: 'modal-window',
  title: 'modal-title',
}
const createModal = () => {
  const modal = createElement('div', styles.modal, null);
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay"> 
      <div class="modal-window">
        <h3 class="modal-title" data-title></h3>
        <div class="modal-content">the hidden word is "<b data-content></b>"</div>
        <div class="modal-button">
          <button class="modal-btn" data-close="true">play again</button>
        </div>
      </div>
    </div>
  `)
  document.body.appendChild(modal);
  return modal;
}
export default createModal;
