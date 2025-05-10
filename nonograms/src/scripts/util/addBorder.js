import data from "./data";
import globalVars from "./variables";

const addBorder = () => {
  const nonogram = data[globalVars.category][globalVars.index].nonogram;
  globalVars.components.gameCells.forEach((item, index) => {
    if (nonogram.length === 10) {
      if (index >= 40 && index < 50) {
        item.classList.add('extra-bottom-border');
      }
      if (!((index + 1) % 5) && (index + 1) % 10) {
        item.classList.add('extra-right-border');
      }
    }
    if (nonogram.length > 10) {
      if (!((index + 1) % 5) && (index + 1) % 15) {
        item.classList.add('extra-right-border');
      }
      if ((index + 1 > 60 && index + 1 <= 75) || (index + 1 > 135 && index + 1 <= 150)) {
        item.classList.add('extra-bottom-border');
      }
    }
  })
}
export default addBorder
