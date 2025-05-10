import globalVars from './variables';
import createElement from './createElement';
import addBorder from './addBorder';

const resizeTopHintsSide = () => globalVars.components.topSide.style.width = globalVars.components.gameField.offsetWidth + "px";
const renderGameField = current => {
  globalVars.components.gameCells.length = 0;
  globalVars.components.gameField.textContent = '';
  for (let i = 0; i < current.nonogram.length; i++) {
    for (let j = 0; j < current.nonogram[i].length; j++) {
      const gameCell = createElement({
        tag: 'div',
        classes: ['game-cell'],
      });
      gameCell.setAttribute('data-index', `${current.nonogram[i][j]}`);
      globalVars.components.gameField.appendChild(gameCell);
      globalVars.components.gameCells.push(gameCell);
    }
  }
  const adaptGameFieldSize = () => {
    if (globalVars.category === 'easy') {
      globalVars.components.gameField.style.gridTemplateColumns = "repeat(5, 1fr)";
      globalVars.components.gameField.style.gridTemplateRows = "repeat(5, 1fr)";
    }
    if (globalVars.category === 'medium') {
      globalVars.components.gameField.style.gridTemplateColumns = "repeat(10, 1fr)";
      globalVars.components.gameField.style.gridTemplateRows = "repeat(10, 1fr)";
    }
    if (globalVars.category === 'hard') {
      globalVars.components.gameField.style.gridTemplateColumns = "repeat(15, 1fr)";
      globalVars.components.gameField.style.gridTemplateRows = "repeat(15, 1fr)";
    }
  };

  const searchClue = side => {
    const nonogram = current.nonogram;
    const hints = [];
    for (let i = 0; i < nonogram.length; i++) {
      let curArr = [];
      let counter = 0;
      for (let j = 0; j < nonogram[i].length; j++) {
        if (side ? nonogram[i][j] : nonogram[j][i]) {
          counter++;
        } else {
          if (counter) {
            curArr.push(counter);
            counter = 0;
          }
        }
      }
      if (counter) {
        curArr.push(counter);
      }
      hints.push(curArr);
    }
    return hints;
  };
  
  const renderHints = (matrix, side) => {
    const SIDE__NODE = document.querySelector(`.${side}side`);
    SIDE__NODE.innerHTML = '';
    for (let i = 0; i < matrix.length; i++) {
      const hintCell = createElement({
        tag: 'div',
        classes: [`${side}side-cell`],
      });
      for (let j = 0; j < matrix[i].length; j++) {
        const subCell = createElement({
          tag: 'div',
          classes: ['sub-hint'],
        });
        subCell.textContent = matrix[i][j];
        hintCell.appendChild(subCell);
      }
      SIDE__NODE.appendChild(hintCell);
    }
  };
  
  const leftHints = searchClue('left')
  renderHints(leftHints, 'left');
  const topHints = searchClue();
  renderHints(topHints, 'top');
  adaptGameFieldSize();
  addBorder();
  resizeTopHintsSide();
}

export default renderGameField
