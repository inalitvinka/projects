import globalVars from "./variables";

const startTimer = () => {
  globalVars.components.save.disabled = false;
  globalVars.components.reset.disabled = false;
  const secDisplay = globalVars.components.secDisplay;
  const minDisplay = globalVars.components.minDisplay;
  globalVars.interval = setInterval(() => {
    globalVars.seconds++;
    if (globalVars.seconds < 10) {
      secDisplay.textContent = `0${globalVars.seconds}`;
    }
    if (globalVars.seconds >= 10) {
      secDisplay.textContent = globalVars.seconds;
    }
    if (globalVars.seconds > 59) {
      globalVars.minutes++;
      minDisplay.textContent = `0${globalVars.minutes}`;
      globalVars.seconds = 0;
      secDisplay.textContent = `0${globalVars.seconds}`;
    }
  }, 1000);
}
export default startTimer
