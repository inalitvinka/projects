import globalVars from "./variables";

const handleTheme = () => {
  const SWITCH = globalVars.components.inputSwither;
  if (localStorage.getItem('isDark') === 'true') {
    document.body.classList.add("dark-theme");
    SWITCH.checked = false;
  } else {
    document.body.classList.remove("dark-theme");
    SWITCH.checked = true;
  }
}
export default handleTheme
