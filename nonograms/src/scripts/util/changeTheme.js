import globalVars from "./variables";
import playAudio from "./playAudio";
import addDarkTheme from "./handleTheme";

const changeTheme = () => {
    const SWITCH = globalVars.components.inputSwither;
    SWITCH.addEventListener('click', () => {
        if (!globalVars.isMuted) playAudio(require('../../assets/audio/click.mp3'));
        if (localStorage.getItem('isDark') === 'true') {
            localStorage.setItem('isDark', 'false');
        } else {
            localStorage.setItem('isDark', 'true');
        }
        addDarkTheme();
    })
}
export default changeTheme
