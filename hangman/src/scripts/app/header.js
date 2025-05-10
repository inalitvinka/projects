import createElement from "../util/createElement";

const cssStyles = {
  header: 'wrapper container header',
  h1: 'header-title',
}
const HEADER_TITLE = 'hangman';

const createHeader = () => {
  const header = createElement('header', cssStyles.header);
  const h1 = createElement('h1', cssStyles.h1);
  h1.textContent = HEADER_TITLE;
  header.appendChild(h1);
  return header;
}
export default createHeader;
