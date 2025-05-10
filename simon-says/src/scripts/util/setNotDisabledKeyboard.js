import vars from "./globalVars";

const setNotDisabledKeyboard = (components) => {
  [...components.keyboardNums.children, ...components.keyboardLetters.children].forEach(item => {
    if (item.classList.contains('key-active')) {
      item.classList.remove('key-active');
    }
    item.disabled = false;
  });
  vars.isDisabled = false;
}
export default setNotDisabledKeyboard
