import globalVars from './variables';
import playAudio from './playAudio';

const handlePageAudio = () => {
  const SOUND = globalVars.components.sound;
  SOUND.addEventListener('click', () => {
    if (!globalVars.isMuted) {
      playAudio(require('../../assets/audio/click.mp3'));
      SOUND.classList.add('mute');
      globalVars.isMuted = true;
    } else {
      SOUND.classList.remove('mute');
      globalVars.isMuted = false;
    }
  });
}
export default handlePageAudio
