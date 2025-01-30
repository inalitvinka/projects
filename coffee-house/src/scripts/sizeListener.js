import { cards } from './dataCards';
import createMenuPage from "./plugins/menu";

const LOADER = document.getElementById('loader');

function sizeListener() {
    const windowWidth = window.innerWidth;
    const LAPTOP = 768.99;
    const minCardsCount = 4;
    const activeCards = document.querySelectorAll('div.gallery-card');
    if (windowWidth < LAPTOP && activeCards.length >= minCardsCount) {
        if (LOADER) LOADER.classList.add('flex');
        document.querySelectorAll('div.gallery-card').forEach((item, index) => {
            if (index >= minCardsCount) {
            item.style.display = "none";
            }
        })
    }
    if (windowWidth > LAPTOP || activeCards.length <= minCardsCount) {
        if (LOADER) LOADER.classList.remove('flex');
        activeCards.forEach(item => item.style.display = "block");
    }   
}

export default sizeListener;