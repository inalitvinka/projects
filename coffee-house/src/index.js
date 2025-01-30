import './index.pug';
import './page.pug';
import './styles/index.scss';

import { cards } from './scripts/dataCards';
import slider from './scripts/plugins/slider';
import sizeListener from './scripts/sizeListener';
import showMenu from './scripts/plugins/burger';
import showModal from './scripts/plugins/modal';
import createMenuPage from './scripts/plugins/menu';
import changeMenu from './scripts/changeMenu';
import { showHiddenCards, removeLoader } from './scripts/workLoader';

const SLIDER = document.getElementById('slider');
const MENU = document.getElementById('menu');
const LOADER = document.getElementById('loader');
const ACTIVE_TAB = 'coffee';

window.onload = () => {
    sizeListener();
    if (LOADER) {
        LOADER.addEventListener('click', () => {
            showHiddenCards();
            removeLoader();
        });
    }
    if (MENU) {
        changeMenu();
        createMenuPage(ACTIVE_TAB);
        window.addEventListener("resize", sizeListener);
    }
    showMenu();
    showModal(cards);
    if (SLIDER) {
        slider();
    }
};