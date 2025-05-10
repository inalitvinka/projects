import ElementCreator from '../util/element-creator';
import View from './view';
import ButtonView from './navbutton-view';

const CssClasses = {
  CONTAINER: 'container',
  HEADER: 'header',
  TITLE: 'header-title',
  NAV: 'nav',
}
const LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
}
const TITLE = 'simon says';
const START_LEVEL_INDEX = 0;

export default class HeaderView extends View {
  constructor() {
    const params = {
      tag: 'header',
      classNames: [CssClasses.HEADER],
      textContent: '',
    }
    super(params);
    this.buttonElements = [];
    this.configureView();
  }

  configureView() {
    const paramsGameTitle = {
      tag: 'h1',
      classNames: [CssClasses.TITLE],
      textContent: TITLE,
    }
    const creatorTitle = new ElementCreator(paramsGameTitle);
    this.elementCreator.addInnerElement(creatorTitle);

    const paramsNav = {
      tag: 'nav',
      classNames: [CssClasses.NAV],
      textContent: '',
    }
    const creatorNav = new ElementCreator(paramsNav);
    this.elementCreator.addInnerElement(creatorNav);
    
    const levels = [
      {
        name: LEVELS.EASY,
      },
      {
        name: LEVELS.MEDIUM,
      },
      {
        name: LEVELS.HARD
      }
    ]

    levels.forEach((item, index) => {
      const btnElement = new ButtonView(item.name, this.buttonElements);
      creatorNav.addInnerElement(btnElement.getHTMLElement());
      this.buttonElements.push(btnElement);
      if (!index) {
        btnElement.setActiveStatus();
      }
    })
  }
}
