import { cards } from '../dataCards';
import sizeListener from '../sizeListener';
const MENU = document.getElementById('menu');

const _toHTML = card => `
    <div class="gallery-card" data-card="card" data-id="${card.id}">
        <div class="gallery-image"> 
            <img class="gallery-img" data-card="card" data-id="${card.id}" src="${card.image}" alt="${card.name}">
        </div>
        <div class="gallery-info" data-card="card">
            <h4 class="gallery-title" data-card="card" data-id="${card.id}">${card.name}</h4>
            <p class="gallery-text" data-card="card" data-id="${card.id}">${card.description}</p>
            <p class="gallery-price" data-card="card" data-id="${card.id}">$${card.price}</p>
        </div>
    </div>            
`; 
        
const createMenuPage  = (active) => {
    const filterCardsByCategory = cards.filter(item => item.category === active);
    function renderCards(arr) {
        const html = arr.map(_toHTML).join('');
        MENU.innerHTML = '';
        MENU.innerHTML = html;
    }
    renderCards(filterCardsByCategory);
    sizeListener();
}

export default createMenuPage;