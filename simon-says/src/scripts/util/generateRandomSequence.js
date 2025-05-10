import vars from "./globalVars";

const generateRandomSequence = (components) => {
  let keys;
  let randomIndex;
  vars.sequence.length = 0;
  vars.reviewSequence.length = 0;
  if (vars.level === 'easy') {
    keys = components.keyboardNums.children;
  }
  if (vars.level === 'medium') {
    keys = components.keyboardLetters.children;
  } 
  if (vars.level === 'hard') {
    keys = [...components.keyboardNums.children, ...components.keyboardLetters.children];
  }
  do {
    randomIndex = Math.floor(Math.random() * keys.length);
    vars.sequence.push(keys[randomIndex]);
    vars.reviewSequence.push(keys[randomIndex].textContent);
    
  } while (vars.reviewSequence.length < vars.sequenceLength);
  console.log(`Simon says: ${vars.reviewSequence.join(' ')}`);
}
export default generateRandomSequence
