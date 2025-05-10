import showUserSequence from "./showUserSequence";
import checkUserSequence from "./checkUserSequence";
import vars from "./globalVars";
import { nums, letters } from "./keys-data";

const handleKeyDown = (components) => {
  
  const elements = [...components.keyboardNums.children, ...components.keyboardLetters.children];
  let isPressed = true;
  document.addEventListener('keydown', event => {
    if (vars.isDisabled 
      || !event.code.includes('Digit') && !event.code.includes('Key')
      || vars.level === 'easy' && event.code.includes('Key')
      || vars.level === 'medium' && event.code.includes('Digit')
      || !isPressed) {
      vars.isKey = false;
      return;
    }
    isPressed = false;
    vars.isKey = true;
    let activeLetter = event.code.slice(-1).toUpperCase();
    vars.userInputArr.push(activeLetter);
    vars.keyIndex = Object.keys({...nums, ...letters}).indexOf(event.code);
    elements[vars.keyIndex].classList.add('key-active');
    showUserSequence(components);
    checkUserSequence(components);
    setTimeout(() => isPressed = true, 100);
  });

  document.addEventListener('keyup', event => {
  
    if (vars.isDisabled || !vars.keyIndex) return;
    elements[vars.keyIndex].classList.remove('key-active');
  });
  [...components.keyboardNums.children, ...components.keyboardLetters.children].forEach(item => {
    if (item.classList.contains('key-active')) {
      item.classList.remove('key-active');
    }
  });
}
export default handleKeyDown
