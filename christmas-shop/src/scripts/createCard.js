import { cards } from './dataCards';
import _toHTML from './makeCardsHtml';
import shuffleArray from './shuffleArray';

const createCard = () => {
    const CARDS = document.getElementById('cards');
    const randomCards = shuffleArray(cards).slice(0, 4);                         
    function renderCards(arr) {
        const html = arr.map(_toHTML).join('');
        CARDS.innerHTML = '';
        CARDS.innerHTML = html;
    }
    renderCards(randomCards);
}
export default createCard;
