import createElement from "./createElement";
import handleActiveLetter from "./handleAcriveLetter";

const renderKeyboard = () => {
  for (let i = 97; i <= 122; i++) {
    const button = createElement('button', 'key-btn');
    button.textContent = String.fromCharCode(i);
    document.querySelector('.keyboard').appendChild(button);
    button.addEventListener('click', () => {
      button.disabled = true;
      handleActiveLetter(String.fromCharCode(i));
    });
  }
}
export default renderKeyboard;
