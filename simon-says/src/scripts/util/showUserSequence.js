import vars from "./globalVars";

const showUserSequence = (components) => {
  components.output.textContent = vars.userInputArr.join('');
}
export default showUserSequence
