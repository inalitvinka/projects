import handleActiveLetter from "./handleAcriveLetter";

const handleKeyDown = () => {
  document.addEventListener('keydown', event => {
    let activeLetter = event.key.toLowerCase();
    const buttonsCollection = document.querySelectorAll('.key-btn');
    const activeBtn = [...buttonsCollection].find(item => item.textContent === activeLetter);
    if (activeBtn && activeBtn.disabled === false) {
      activeBtn.disabled = true;
      handleActiveLetter(activeLetter);
    }
  });
}

export default handleKeyDown;
