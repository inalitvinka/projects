import createComponent from "../util/createComponent"
import showUserSequence from "../util/showUserSequence";
import checkUserSequence from "../util/checkUserSequence";
import vars from "../util/globalVars";

const cssClasses = {
  ITEM: 'keyboard-item',
}
const renderKeyboard = (obj, container, components) => {
  for (let i = 0; i < Object.keys(obj).length; i++) {
    const key = createComponent({
      tag: 'button',
      classes: [cssClasses.ITEM],
      textContent: obj[Object.keys(obj)[i]],
    });
    key.addEventListener('click', event => {
      vars.userInputArr.push(event.target.textContent);
      showUserSequence(components);
      checkUserSequence(components);
    })
    container.append(key);
  }
}
export default renderKeyboard
