import { cards } from './dataCards';
import _toHTML from './makeCardsHtml';
import shuffleArray from './shuffleArray';

const createCardsGallery = active => {
    const GALLERY = document.getElementById('gallery');
    function renderCards(arr) {
        const html = arr.map(_toHTML).join('');
        GALLERY.innerHTML = '';
        GALLERY.innerHTML = html;
    }
    const filterCardsByCategory = cards.filter(item => item.category.toLowerCase() === active);
    active === 'all' ? renderCards(shuffleArray(cards)) : renderCards(filterCardsByCategory);
}
export default createCardsGallery;
