const createKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  document.body.appendChild(keyboard);
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.className = 'key-btn';
    button.textContent = String.fromCharCode(i);
    button.addEventListener('click', () => {
      button.disabled = true;
    });
    keyboard.appendChild(button);
  }
}
export default createKeyboard;
