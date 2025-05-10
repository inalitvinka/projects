import createPageLayout from "./createPageLayout";
import globalVars from "../util/variables";
import data from "../util/data";
import renderGameField from "../util/renderGameField";
import renderCategoryItems from "../util/renderCategoryItems";
import handleTheme from "../util/handleTheme";
import changeTheme from "../util/changeTheme";
import handlePageAudio from "../util/handlePageAudio";
import changeLevel from "../util/changeLevel";
import changeNonogram from "../util/changeNonogram";
import handleCellClick from "../util/handleCellClick";
import handlekMenuClick from "../util/handleMenuClick";

const createApp = () => {
  createPageLayout();
  renderCategoryItems(globalVars.category);
  renderGameField(data[globalVars.category][globalVars.index]);
  handleCellClick();
  handlekMenuClick();
  changeLevel();
  changeNonogram();
  handleTheme();
  changeTheme();
  handlePageAudio();
}
export default createApp
