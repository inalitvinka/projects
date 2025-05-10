import globalVars from '../util/variables';
import createElement from '../util/createElement';
import { cssClasses, textContent } from '../util/utilObjects';

const createPageLayout = () => {
  const layoutComponents = {};
  layoutComponents.sound = createElement({
    tag: 'div',
    classes: [cssClasses.sound],
  });
  
  layoutComponents.roundSwither = createElement({
    tag: 'span',
    classes: [cssClasses.roundSwither],
  });

  layoutComponents.inputSwither = createElement({
    tag: 'input',
    classes: [cssClasses.inputSwither],
    attribute: ['type', 'checkbox'],
  });

  layoutComponents.labelSwither = createElement({
    tag: 'label',
    classes: [cssClasses.labelSwither],
    children: [layoutComponents.inputSwither, layoutComponents.roundSwither],
  });

  layoutComponents.themeSwither = createElement({
    tag: 'div',
    classes: [cssClasses.themeSwither],
    children: [layoutComponents.labelSwither],
  });

  layoutComponents.headerNav = createElement({
    tag: 'div',
    classes: [cssClasses.headerNav],
    children: [layoutComponents.sound, layoutComponents.themeSwither],
  });

  layoutComponents.h1 = createElement({
    tag: 'h1',
    textContent: textContent.h1,
    classes: [cssClasses.h1],
  });

  layoutComponents.header = createElement({
    tag: 'header',
    classes: [cssClasses.header, cssClasses.wrapper],
    children: [layoutComponents.h1, layoutComponents.headerNav],
  });

  layoutComponents.secDisplay = createElement({
    tag: 'span',
    textContent: textContent.seconds,
    classes: [cssClasses.seconds],
  });

  layoutComponents.colon = createElement({
    tag: 'span',
    textContent: textContent.colon,
    classes: [cssClasses.colon],
  });

  layoutComponents.minDisplay = createElement({
    tag: 'span',
    textContent: textContent.minutes,
    classes: [cssClasses.minutes],
  });

  layoutComponents.timer = createElement({
    tag: 'div',
    classes: [cssClasses.timer],
    children: [layoutComponents.minDisplay, layoutComponents.colon, layoutComponents.secDisplay],
  });

  layoutComponents.time = createElement({
    tag: 'div',
    classes: [cssClasses.time],
    children: [layoutComponents.timer],
  });

  layoutComponents.categories = [];
  layoutComponents.levelBtns = [];
  layoutComponents.hardCategoryBtn = createElement({
    tag: 'button',
    textContent: textContent.hardCategoryBtn,
    classes: [cssClasses.categoryBtn],
  });

  layoutComponents.mediumCategoryBtn = createElement({
    tag: 'button',
    textContent: textContent.mediumCategoryBtn,
    classes: [cssClasses.categoryBtn],
  });

  layoutComponents.easyCategoryBtn = createElement({
    tag: 'button',
    textContent: textContent.easyCategoryBtn,
    classes: [cssClasses.categoryBtn, cssClasses.categoryActive],
  });

  layoutComponents.levelBtns.push(layoutComponents.easyCategoryBtn, layoutComponents.mediumCategoryBtn, layoutComponents.hardCategoryBtn);
  layoutComponents.categoryButtons = createElement({
    tag: 'div',
    classes: [cssClasses.categoryButtons],
    children: [layoutComponents.easyCategoryBtn, layoutComponents.mediumCategoryBtn, layoutComponents.hardCategoryBtn],
  });

  layoutComponents.categoryItems = createElement({
    tag: 'div',
    classes: [cssClasses.categoryItems],
  });

  layoutComponents.category = createElement({
    tag: 'div',
    classes: [cssClasses.category],
    children: [layoutComponents.categoryButtons, layoutComponents.categoryItems],
  });

  layoutComponents.continue = createElement({
    tag: 'button',
    textContent: textContent.continueBtn,
    classes: [cssClasses.menuButton, cssClasses.buttonGallery],
  });

  layoutComponents.score = createElement({
    tag: 'button',
    textContent: textContent.scoreBtn,
    classes: [cssClasses.menuButton, cssClasses.buttonGallery],
  });

  layoutComponents.save = createElement({
    tag: 'button',
    textContent: textContent.saveBtn,
    classes: [cssClasses.menuButton, cssClasses.buttonGallery],
  });

  layoutComponents.solution = createElement({
    tag: 'button',
    textContent: textContent.solutionBtn,
    classes: [cssClasses.menuButton, cssClasses.buttonGallery],
  });

  layoutComponents.reset = createElement({
    tag: 'button',
    textContent: textContent.resetBtn,
    classes: [cssClasses.menuButton, cssClasses.buttonGallery],
    attribute: ['disabled', 'true'],
  });

  layoutComponents.random = createElement({
    tag: 'button',
    textContent: textContent.randomBtn,
    classes: [cssClasses.menuButton, cssClasses.buttonGallery],
  });

  layoutComponents.menuButtons = createElement({
    tag: 'div',
    classes: [cssClasses.menuButtons],
    children: [layoutComponents.random, layoutComponents.reset, layoutComponents.solution, layoutComponents.save, layoutComponents.score, layoutComponents.continue],
  });

  layoutComponents.menu = createElement({
    tag: 'div',
    classes: [cssClasses.menu],
    children: [layoutComponents.time, layoutComponents.menuButtons],
  });

  layoutComponents.gameCells = [];
  layoutComponents.gameField = createElement({
    tag: 'div',
    classes: [cssClasses.gameField],
  });

  layoutComponents.topSide = createElement({
    tag: 'div',
    classes: [cssClasses.topSide],
  });

  layoutComponents.leftSide = createElement({
    tag: 'div',
    classes: [cssClasses.leftSide],
  });

  layoutComponents.gameArea = createElement({
    tag: 'div',
    classes: [cssClasses.gameArea],
    children: [layoutComponents.leftSide, layoutComponents.gameField],
  });

  layoutComponents.gameCenter = createElement({
    tag: 'div',
    classes: [cssClasses.gameCenter],
    children: [layoutComponents.topSide, layoutComponents.gameArea],
  });

  layoutComponents.game = createElement({
    tag: 'div',
    classes: [cssClasses.game],
    children: [layoutComponents.gameCenter],
  });

  layoutComponents.main = createElement({
    tag: 'main',
    classes: [cssClasses.main,  cssClasses.wrapper],
    children: [layoutComponents.category, layoutComponents.menu, layoutComponents.game],
  });

  layoutComponents.footerLink = createElement({
    tag: 'a',
    textContent: textContent.footerLink,
    classes: [cssClasses.footerLink],
    attribute: [textContent.footerAttrHref, textContent.footerURL],
  });
  layoutComponents.footerLink.target = textContent.footerAttrTarget;

  layoutComponents.footer = createElement({
    tag: 'footer',
    classes: [cssClasses.footer, cssClasses.wrapper],
    textContent: textContent.footerText,
    children: [layoutComponents.footerLink],
  });

  document.body.classList.add(cssClasses.container);
  document.body.append(layoutComponents.header, layoutComponents.main, layoutComponents.footer);
  globalVars.components = layoutComponents;
}

export default createPageLayout
