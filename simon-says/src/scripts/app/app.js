import createPageLayout from "./createPageLayout";
import initGame from "../util/initGame";
import renderKeyboard from "./renderKeyboard";
import createNavButtons from "./createNavButtons";
import handleGameBtns from "../util/handleGameBtns";
import handleKeyDown from "../util/handleKeyDown";
import { nums, letters } from '../util/keys-data';

export const createApp = () => {
  const components = createPageLayout();
  createNavButtons(components.nav, components.keyboardNums, components.keyboardLetters);
  renderKeyboard(nums, components.keyboardNums, components);
  renderKeyboard(letters, components.keyboardLetters, components);
  handleKeyDown(components);
  handleGameBtns(components);
  initGame(components);
}
