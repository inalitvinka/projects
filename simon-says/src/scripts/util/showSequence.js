import setDisabledKeyboard from "./disableKeyboard";
import setNotDisabledKeyboard from "./setNotDisabledKeyboard";
import vars from "./globalVars";

let counter = 0;
const showSequence = (items, components) => {
  setDisabledKeyboard(components);
  components.repeatBtn.disabled = true;
  components.newGameBtn.disabled = true;
  if (counter >= items.length) {
    counter = 0;
    if (vars.attempts > 1) {
      components.repeatBtn.disabled = false;
    }
    components.newGameBtn.disabled = false;
    setNotDisabledKeyboard(components);
    return;
  }
  const item = items[counter];
  const colorChange = [{
    borderColor: 'rgba(218, 165, 32)',
    color: 'rgba(218, 165, 32)',
    transform: 'translateY(.1rem)',
  }];
  const animationTiming = {
    duration: 700,
    easing: "ease",
    iterations: 1,
    delay: 300,
  };  
  const animation = item.animate(colorChange, animationTiming);
  animation.addEventListener('finish', event => {
    counter++;
    showSequence(items, components);
  });
}
export default showSequence
