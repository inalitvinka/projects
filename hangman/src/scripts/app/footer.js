import createElement from "../util/createElement";
import logo from '../../assets/images/rss-logo.png';

const cssStyles = {
  footer: 'wrapper container footer',
  link: 'footer-link',
  logo: 'footer-logo',
}
const URL = 'https://github.com/rolling-scopes-school/tasks/tree/master/stage1/tasks/hangman';

const createFooter = () => {
  const footer = createElement('footer', cssStyles.footer);
  const link = createElement('a', cssStyles.link);
  link.href = URL;
  link.target =  "_blank";
  const img = createElement('img', cssStyles.logo);
  img.src = logo;
  link.appendChild(img);
  footer.appendChild(link);
  return footer;
}
export default createFooter;
