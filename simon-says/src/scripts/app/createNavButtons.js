import createComponent from "../util/createComponent"
import vars from "../util/globalVars";

const cssClasses = {
  BUTTON: 'nav-button',
}
const textContent = {
  BTN_ATR: 'data-btn',
}
const levels = [
  {name: 'easy'},
  {name: 'medium'},
  {name: 'hard'},
]
const btns = [];

const _setActiveStatus = btn => {
  btns.forEach(item => {
    item.classList.remove('nav-selected');
  });
  btn.classList.add('nav-selected');
}

const createNavButtons = (container, nums, letters) => {
  levels.forEach((item, index) => {
    const btn = createComponent({
      tag: 'button',
      classes: [cssClasses.BUTTON],
      textContent: item.name,
      attribute: [textContent.BTN_ATR, item.name],
    });
    btns.push(btn);
    if (!index) {
      btn.classList.add('nav-selected');
      letters.style.display = 'none';
    }
    btn.addEventListener('click', event => {
      _setActiveStatus(btn)
      const target = event.target.dataset.btn;
      if (target === 'easy') {
        vars.level = target;
        nums.style.display = 'flex';
        letters.style.display = 'none';
      } else if (target === 'medium') {
        vars.level = target;
        nums.style.display = 'none';
        letters.style.display = 'flex';
      } else if (target === 'hard') {
        vars.level = target;
        nums.style.display = 'flex';
        letters.style.display = 'flex';
      }
    });
    container.append(btn);
  })  
}
export default createNavButtons
