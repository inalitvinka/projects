import createComponent from '../util/createComponent';
import vars from '../util/globalVars';

const cssClasses = {
  CONTAINER: 'container',
  HEADER: 'header',
  TITLE: 'header-title',
  NAV: 'nav',
  BUTTON: 'nav-button',

  MAIN: 'main',
  SECTION: 'game',
  ROUNDS: 'game-rounds',
  ROUND: 'game-round',
  OUTPUT: 'output',
  KEYBOARD: 'keyboard',
  NUMS: 'keyboard-nums',
  LETTERS: 'keyboard-letters',
  ITEM: 'keyboard-item',
  NUM: 'keyboard-num',
  LETTER: 'keyboard-letter',

  GAMEBTNS: 'game-buttons',
  GAMEBTN: 'game-button',

  FOOTER: 'footer',
  LINK: 'footer-link',

  MODAL: 'modal',
  OVERLAY: 'modal-overlay',
  WINDOW: 'modal-window',
  MODAL_TITLE: 'modal-title',
  MODAL_BUTTOM: 'modal-button',
  MODAL_CONTENT: 'modal-content',
  BTN_WRAPPER: 'modal-btn',
  NEW_GAME_MODAL: 'modal-game',
}
const textContent = {
  TITLE: 'simon says:',
  COUNTER: 'round:',
  CURRENT: `${vars.currentRound}`,
  ROUNDS: ` / ${vars.roundsNumber}`,
  BTN_ATR: 'data-btn',
  START_BTN: 'start',
  START_ATR: 'start',
  NEXT_BTN: 'next round',
  NEXT_ATR: 'next',
  REPEAT_BTN: 'repeat the sequence',
  REPEAT_ATR: 'repeat',
  NEW_BTN: 'new game',
  NEW_ATR: 'new game',
  FOOTER: '2025',
  URL: 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1/tasks/hangman',
  LINK: 'RSSchool',
  DONE: 'this round is done',
  USER: 'Please enable the English keyboard layout',
  MODAL_ATR: 'data-close',
  MODAL_VAL: 'true',
  MODAL_BTN: 'x',
  MODAL_TEXT: 'Congrats! You\'ve won!',
  SIMON_TEXT: '',
}

const createPageLayout = () => {
  const layoutComponents = {};

  layoutComponents.title = createComponent({
    tag: 'h1',
    classes: [cssClasses.TITLE],
    textContent: textContent.TITLE,
  });

  layoutComponents.link = createComponent({
    tag: 'a',
    classes: [cssClasses.LINK],
    textContent: textContent.LINK,
    attribute: ['href', textContent.URL],
  });

  layoutComponents.nav = createComponent({
    tag: 'div',
    classes: [cssClasses.NAV],
  });
  
  layoutComponents.currentRound = createComponent({
    tag: 'p',
    classes: [cssClasses.ROUND],
    textContent: textContent.CURRENT,
  });

  layoutComponents.roundsNumber = createComponent({
    tag: 'p',
    classes: [cssClasses.ROUND],
    textContent: textContent.ROUNDS,
  });

  layoutComponents.roundsCounter = createComponent({
    tag: 'div',
    classes: [cssClasses.ROUNDS],
    textContent: textContent.COUNTER,
    children: [layoutComponents.currentRound, layoutComponents.roundsNumber],
  });

  layoutComponents.output = createComponent({
    tag: 'div',
    classes: [cssClasses.OUTPUT],
  });

  layoutComponents.keyboardNums = createComponent({
    tag: 'div',
    classes: [cssClasses.NUMS],
  });

  layoutComponents.keyboardLetters = createComponent({
    tag: 'div',
    classes: [cssClasses.LETTERS],
  });

  layoutComponents.keyboard = createComponent({
    tag: 'div',
    classes: [cssClasses.KEYBOARD],
    children: [layoutComponents.keyboardNums, layoutComponents.keyboardLetters],
  });

  layoutComponents.startBtn = createComponent({
    tag: 'button',
    classes: [cssClasses.GAMEBTN, cssClasses.BUTTON],
    textContent: textContent.START_BTN,
    attribute: [textContent.BTN_ATR, textContent.START_ATR],
  });

  layoutComponents.newGameBtn = createComponent({
    tag: 'button',
    classes: [cssClasses.GAMEBTN, cssClasses.BUTTON],
    textContent: textContent.NEW_BTN,
    attribute: [textContent.BTN_ATR, textContent.NEW_ATR],
  });

  layoutComponents.repeatBtn = createComponent({
    tag: 'button',
    classes: [cssClasses.GAMEBTN, cssClasses.BUTTON],
    textContent: textContent.REPEAT_BTN,
    attribute: [textContent.BTN_ATR, textContent.REPEAT_ATR],
  });

  layoutComponents.nextBtn = createComponent({
    tag: 'button',
    classes: [cssClasses.GAMEBTN, cssClasses.BUTTON],
    textContent: textContent.NEXT_BTN,
    attribute: [textContent.BTN_ATR, textContent.NEXT_ATR],
  });

  layoutComponents.gameBtns = createComponent({
    tag: 'div',
    classes: [cssClasses.GAMEBTNS],
    children: [layoutComponents.newGameBtn, layoutComponents.startBtn, layoutComponents.repeatBtn, layoutComponents.nextBtn],
  });

  layoutComponents.section = createComponent({
    tag: 'section',
    classes: [cssClasses.SECTION],
    children: [layoutComponents.nav, layoutComponents.roundsCounter, layoutComponents.output, layoutComponents.keyboard, layoutComponents.gameBtns],
  });

  layoutComponents.main = createComponent({
    tag: 'main',
    classes: [cssClasses.MAIN],
    children: [layoutComponents.section],
  });

  layoutComponents.modalClose = createComponent({
    tag: 'span',
    classes: [cssClasses.MODAL_BUTTOM],
    textContent: textContent.MODAL_BTN,
    attribute: [textContent.MODAL_ATR, textContent.MODAL_VAL],
  });

  layoutComponents.modalContent = createComponent({
    tag: 'p',
    classes: [cssClasses.MODAL_CONTENT],
  });

  layoutComponents.modalText = createComponent({
    tag: 'p',
    classes: [cssClasses.MODAL_CONTENT],
  });

  layoutComponents.newGameModalBtn = createComponent({
    tag: 'button',
    classes: [cssClasses.GAMEBTN, cssClasses.BUTTON, cssClasses.NEW_GAME_MODAL],
    textContent: textContent.NEW_BTN,
    attribute: [textContent.BTN_ATR, textContent.NEW_ATR],
  });

  layoutComponents.modalBtnWrapper = createComponent({
    tag: 'div',
    classes: [cssClasses.BTN_WRAPPER],
    children: [layoutComponents.newGameModalBtn],
  });

  layoutComponents.modalWindow = createComponent({
    tag: 'div',
    classes: [cssClasses.WINDOW],
    children: [layoutComponents.modalClose, layoutComponents.modalContent, layoutComponents.modalText, layoutComponents.modalBtnWrapper],
  });

  layoutComponents.modalOverlay = createComponent({
    tag: 'div',
    classes: [cssClasses.OVERLAY],
    children: [layoutComponents.modalWindow],
  });

  layoutComponents.modalWindow = createComponent({
    tag: 'div',
    classes: [cssClasses.MODAL],
    children: [layoutComponents.modalOverlay],
  });


  document.body.classList.add(cssClasses.CONTAINER);
  document.body.append(layoutComponents.main, layoutComponents.modalWindow);
  vars.modal = {
    winwow: layoutComponents.modalWindow,
    modalTitle: layoutComponents.modalTitle,
    modalContent: layoutComponents.modalContent,
    newGameModalBtn: layoutComponents.newGameModalBtn,
    modalResult: layoutComponents.modalText,
  }
  return layoutComponents;
}
export default createPageLayout
