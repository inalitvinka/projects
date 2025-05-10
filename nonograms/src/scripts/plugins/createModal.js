import createElement from '../util/createElement';
import { cssClasses, textContent } from '../util/utilObjects';

const createModal = options => {
  const modalComponents = {};
  modalComponents.modalBtn = createElement({
    tag: 'button',
    textContent: textContent.modalBtn,
    classes: [cssClasses.btn],
    attribute: ['data-close', 'true']
  });
  modalComponents.modalButton = createElement({
    tag: 'div',
    classes: [cssClasses.button],
    children: [modalComponents.modalBtn],
  });
  modalComponents.modalTitle = createElement({
    tag: 'h3',
    classes: [cssClasses.title],
  });
  modalComponents.modalContent = createElement({
    tag: 'div',
    classes: [cssClasses.content],
  });
  modalComponents.modalWindow = createElement({
    tag: 'div',
    classes: [cssClasses.window],
    children: [modalComponents.modalTitle, modalComponents.modalContent, modalComponents.modalButton],
  });
  modalComponents.modalOverlay = createElement({
    tag: 'div',
    classes: [cssClasses.overlay],
    children: [modalComponents.modalWindow],
  });
  modalComponents.modal = createElement({
    tag: 'div',
    classes: [cssClasses.modal],
    children: [modalComponents.modalOverlay],
  });
  document.body.appendChild(modalComponents.modal);
  return modalComponents;
}

export default createModal
