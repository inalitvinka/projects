import './index.pug';
import './page.pug';
import './styles/index.scss';

import showMenu from './scripts/plugins/burger';
import createCard from './scripts/createCard';
import createCardsGallery from './scripts/createCardsGallery';
import handleGalleryBtnsClick from './scripts/handleGalleryBtnsClick';
import handleCardClick from './scripts/handleCardclick';
import handleUpButton from './scripts/handleUpButton';
import clickUpButtonHandler from './scripts/clickUpBtnHandler';
import updateTimer from './scripts/updateTimer';
import slider from './scripts/slider';
import global from './scripts/globalVar';

window.onload = () => {
    if (document.getElementById('cards')) {
        createCard();
    }
    if (document.getElementById('gallery')) {
        createCardsGallery(global.activeDefault);
        handleGalleryBtnsClick();
        handleUpButton();
        clickUpButtonHandler();
    }
    handleCardClick();
    showMenu();
    if (document.getElementById('slider')) {
        slider();
        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
        if (!global.diff) {
            clearInterval(timerInterval);
        }
    } 
};
