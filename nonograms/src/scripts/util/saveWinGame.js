import globalVars from "./variables";
import data from "./data";
import convertTimeResult from "./convertTime";

const score = JSON.parse(localStorage.getItem('data')) || [];
const MAX_SCORE = 5;
const saveWinGame = () => {
  const winData = {
    category: globalVars.category,
    name: data[globalVars.category][globalVars.index].name,
    time: `${globalVars.components.minDisplay.textContent}:${globalVars.components.secDisplay.textContent}`,
    id: convertTimeResult(globalVars.minutes, globalVars.seconds),
  }
  if (!JSON.parse(localStorage.getItem('data'))) {
    score.length = 0;
  }
  console.log(score)
  if (score.length === MAX_SCORE) {
    score.shift();
  }
  score.push(winData);
  localStorage.setItem('data', JSON.stringify(score));
}

export default saveWinGame
