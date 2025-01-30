import src from '../../assets/images/coffee/coffee-4.jpg';
import modalCounter from '../modalCounter';

function showModal(cards) {
  function _createModal(options) {
    const DEFAULT_CONTENT = `<div style="max-width: 90rem; padding: 24.5rem"><h3 className="modal-title">MODAL CONTENT</h3></div>`;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('afterbegin', `
      <div class="modal-overlay" data-close="true"> 
        <div class="modal-window">
          <div class="modal-content" data-content></div>
        </div>
      </div>
    `);
    document.body.appendChild(modal);
    return modal;
  }
  function modalWindow(options) {
    const ANIMATION_SPEED = 200;
    let closing = false;
    let destroyed = false;
    const $modal = _createModal();
    const modal = {
      open() {
        if (destroyed) {
          return console.log("Modal is destroyed");
        }
        !closing && $modal.classList.add('open');
        !closing && document.body.classList.add('lock');
      },
      close() {
        closing = true;
        $modal.classList.remove('open');
        $modal.classList.add('hide');
        setTimeout(() => {
          $modal.classList.remove('hide');
          closing = false;
        }, ANIMATION_SPEED)
        document.body.classList.remove('lock');
      },
    }
    const listener = event => {
      if (event.target.dataset.close) {
        modal.close();
      }
    }
    $modal.addEventListener('click', listener);
    return Object.assign(modal, {
      destroy() {
        $modal.parentNode.removeChild($modal);
        $modal.removeEventListener('click', listener);
        destroyed = true;
      },
      setContent(html) {
        $modal.querySelector('[data-content]').innerHTML = html;
      }
    })
  }
  const modal = modalWindow();

  document.addEventListener('click', event => {
    const currentId = +event.target.dataset.id;
    if (event.target.dataset.card === 'card') {
      const currentCard = cards.find(item => item.id === currentId);
      modal.setContent(`
      <div class="modal-image"> 
        <img class="modal-img" src="${currentCard.image}" alt="coffee-card" >
      </div>
      <div class="modal-description">
          <div class="modal-name">
              <h4 class="modal-title">${currentCard.name}</h4>
              <p class="modal-text">${currentCard.description}</p>
          </div>
          <div class="modal-order">
              <p class="modal-order__name">Size</p>
              <div class="modal-tabs">
                  <div class="modal-tab modal-tab__size modal-tab__active" data-addprice="0.00">
                      <p class="modal-icon" data-addprice="0.00">S</p>
                      <p class="modal-size" data-addprice="0.00">${currentCard.sizes.s.size}</p>
                  </div>
                  <div class="modal-tab modal-tab__size" data-addprice="0.50">
                      <p class="modal-icon" data-addprice="0.50">M</p>
                      <p class="modal-size" data-addprice="0.50">${currentCard.sizes.m.size}</p>
                  </div>
                  <div class="modal-tab modal-tab__size" data-addprice="1.00">
                      <p class="modal-icon" data-addprice="1.00">L</p>
                      <p class="modal-size" data-addprice="1.00">${currentCard.sizes.l.size}</p>
                  </div>
              </div>
          </div>
          <div class="modal-order">
              <p class="modal-order__additives">Additives</p>
              <div class="modal-tabs">
                  <div class="modal-tab modal-tab__add" data-addprice="0.50">
                      <p class="modal-icon" data-addprice="0.50">1</p>
                      <p class="modal-size" data-addprice="0.50">${currentCard.additives[0].name}</p>
                  </div>
                  <div class="modal-tab modal-tab__add" data-addprice="0.50">
                      <p class="modal-icon" data-addprice="0.50">2</p>
                      <p class="modal-size" data-addprice="0.50">${currentCard.additives[1].name}</p>
                  </div>
                  <div class="modal-tab modal-tab__add" data-addprice="0.50">
                      <p class="modal-icon" data-addprice="0.50">3</p>
                      <p class="modal-size" data-addprice="0.50">${currentCard.additives[2].name}</p>
                  </div>
              </div>
          </div>
          <div class="modal-total">
              <p class="modal-price">Total:</p>
              <p class="modal-price" data-total="${currentCard.price}">$${currentCard.price}</p>
          </div>
          <div class="modal-info"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_268_12877)">
                <path d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_268_12877"><rect width="16" height="16" fill="white"/></clipPath></defs>
                </svg>
              <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
          </div>
          <div class="modal-button" data-close="true">
              <p class="modal-btn" data-close="true">Close</p>
          </div>
        </div>  
    `);
      modal.open();
      modalCounter();
    }
  });
}

export default showModal;