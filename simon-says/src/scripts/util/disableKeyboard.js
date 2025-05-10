import vars from "./globalVars";

const setDisabledKeyboard = (components) => {
  [...components.keyboardNums.children, ...components.keyboardLetters.children].forEach(item => {
    item.disabled = true;
    if (item.classList.contains('key-active')) {
      item.classList.remove('key-active');
    }
  });
  vars.isDisabled = true;
}
export default setDisabledKeyboard
