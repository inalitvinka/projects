import { cards } from "./dataCards";
import { activeSnowflake, snowflake } from "./svgConstants";
import modal from "./plugins/modal";

const handleCardClick = () => {
  const SNOWFLAKES_NUMBER = 5;
  document.addEventListener('click', event => {
    const currentId = +event.target.dataset.id;
    if (event.target.dataset.id) {
      const currentCard = cards.find(item => item.id === currentId);
      modal.setContent(`
          <div class="modal-image"> 
            <img class="modal-img" src="${currentCard.img}" alt="${currentCard.category}">
          </div>
          <div class="modal-content">
            <div class="modal-info">
              <h4 class="modal-category best-${currentCard.category.slice(4).toLowerCase()}">${currentCard.category}</h4>
              <h3 class="modal-name">${currentCard.name}</h3>
              <p class="modal-description">${currentCard.description}</p>
            </div>
            <div class="modal-addition">Adds superpowers to:</div>
            <div class="modal-add">
              <div class="modal-power">${Object.keys(currentCard.superpowers)[0]}</div>
              <div class="modal-counter">${currentCard.superpowers.live}</div>
              <div class="modal-snowflake">${activeSnowflake.repeat(+currentCard.superpowers.live[1])}${snowflake.repeat(SNOWFLAKES_NUMBER - currentCard.superpowers.live[1])}</div>    
            </div>
            <div class="modal-add">
              <div class="modal-power">${Object.keys(currentCard.superpowers)[1]}</div>
              <div class="modal-counter">${currentCard.superpowers.create}</div>
              <div class="modal-snowflake">${activeSnowflake.repeat(+currentCard.superpowers.create[1])}${snowflake.repeat(SNOWFLAKES_NUMBER - currentCard.superpowers.create[1])}</div>
            </div>
            <div class="modal-add">
              <div class="modal-power">${Object.keys(currentCard.superpowers)[2]}</div>
              <div class="modal-counter">${currentCard.superpowers.love}</div>
              <div class="modal-snowflake">${activeSnowflake.repeat(+currentCard.superpowers.love[1])}${snowflake.repeat(SNOWFLAKES_NUMBER - currentCard.superpowers.love[1])}</div>
            </div>
            <div class="modal-add">
              <div class="modal-power">${Object.keys(currentCard.superpowers)[3]}</div>
              <div class="modal-counter">${currentCard.superpowers.dream}</div>
              <div class="modal-snowflake">${activeSnowflake.repeat(+currentCard.superpowers.dream[1])}${snowflake.repeat(SNOWFLAKES_NUMBER - currentCard.superpowers.dream[1])}</div>
            </div>
          </div>
          <div class="modal-button modal-${currentCard.category.slice(4).toLowerCase()}" data-close="true">
            <svg data-close="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path data-close="true" d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path data-close="true" d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
      `)
      modal.open();   
    }
  })
}
export default handleCardClick;
