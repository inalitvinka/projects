import './index.html';
import './styles/index.scss';

import createHeader from './scripts/app/header';
import createMain from './scripts/app/main';
import createFooter from './scripts/app/footer';

import initGame from './scripts/util/initGame';
import renderKeyboard from './scripts/util/renderKeyboard';
import handleKeyDown from './scripts/util/handleKeyDown';
import modal from './scripts/plugins/modal';

window.onload = () => {
  document.body.append(createHeader(), createMain(), createFooter());
  renderKeyboard();
  handleKeyDown();
  if (document.querySelector('.modal')) {
    document.querySelector('.modal').addEventListener('click', event => {
      if (event.target.dataset.close) {
        modal.close();
        initGame();
      }
    })
  }
  initGame();
}
