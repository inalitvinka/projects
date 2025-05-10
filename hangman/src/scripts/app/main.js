import createElement from "../util/createElement";
import handleActiveLetter from "../util/handleAcriveLetter";
import words from '../util/data';

import srcSpy from '../../assets/images/spy.png';
import srcSpider from '../../assets/images/spider.png';
import srcSpiders from '../../assets/images/spiders.png';
import srcSpiderweb from '../../assets/images/spiderweb.png';
import srcWhiteSpiderweb from '../../assets/images/whitespiderweb.png';

import srcGallow from '../../assets/images/0.png';
import srcHead from '../../assets/images/head.png';
import srcBody from '../../assets/images/body.png';
import srcLeftArm from '../../assets/images/leftArm.png';
import srcRightArm from '../../assets/images/rightArm.png';
import srcLeftLeg from '../../assets/images/leftLeg.png';
import srcRightLeg from '../../assets/images/rightLeg.png';

const cssStyles = {
  main: 'wrapper container main',
  spiderImg: 'main-spider',
  spidersImg: 'main-spiders',
  spiderwebImg: 'main-spiderweb',
  whiteSpiderwebImg: 'main-whitespiderweb',
  spyImg: 'main-spy',
  gallow: 'gallow',
  image: 'gallow-0',
  imageHead: 'gallow-1 gallow-hidden picture',
  imageBody: 'gallow-2 gallow-hidden picture',
  imageLeftArm: 'gallow-3 gallow-hidden picture',
  imageRightArm: 'gallow-4 gallow-hidden picture',
  imageLeftLeg: 'gallow-5 gallow-hidden picture',
  imageRightLeg: 'gallow-6 gallow-hidden picture',

  quiz: 'quiz',
  display: 'display',
  displayWord: 'display-word',
  displayHint: 'display-hint',
  counter: 'display-counter',
}

const createMain = () => {
  const main = createElement('main', cssStyles.main);
  const spyImg = createElement('img', cssStyles.spyImg, srcSpy);
  const spiderImg = createElement('img', cssStyles.spiderImg, srcSpider);
  const spidersImg = createElement('img', cssStyles.spidersImg, srcSpiders);
  const spiderweb = createElement('img', cssStyles.spiderwebImg, srcSpiderweb);
  const whiteSpiderweb = createElement('img', cssStyles.whiteSpiderwebImg, srcWhiteSpiderweb);
  
  const gallow = createElement('div', cssStyles.gallow);
  const img = createElement('img', cssStyles.image, srcGallow, 'gallow');
  const head = createElement('img', cssStyles.imageHead, srcHead, 'head');
  const body = createElement('img', cssStyles.imageBody, srcBody, 'body');
  const leftArm = createElement('img', cssStyles.imageLeftArm, srcLeftArm, 'left arm');
  const rightArm = createElement('img', cssStyles.imageRightArm, srcRightArm, 'right arm');
  const leftLeg = createElement('img', cssStyles.imageLeftLeg, srcLeftLeg, 'left leg');
  const rightLeg= createElement('img', cssStyles.imageRightLeg, srcRightLeg, 'right leg');
  gallow.append(img, head, body, leftArm, rightArm, leftLeg, rightLeg);

  const quiz = createElement('div', 'quiz');
  const display = createElement('div', cssStyles.display);
  const word = createElement('h3', cssStyles.displayWord);
  const hint = createElement('p', cssStyles.displayHint);
  
  const counter = createElement('p', cssStyles.counter);
  counter.innerHTML = 'Incorrect guesses: <b></b>'
  display.append(word, hint, counter);

  const keyboard = createElement('div', 'keyboard');
  quiz.append(display, keyboard);
  main.append(spiderImg, spidersImg, spiderweb, whiteSpiderweb, spyImg, quiz, gallow);
  return main;
}
export default createMain;
