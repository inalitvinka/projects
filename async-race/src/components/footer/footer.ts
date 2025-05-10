import './footer.scss';
import { Component } from '../../services';

const styles = {
  CONTAINER: 'container',
  FOOTER: 'footer',
  GITHUB: 'footer-github',
  FOOTER_CONTAINER: 'footer-container',
  COPYRIGHT: 'footer-copyright',
  COPYRIGHT_LINK: 'footer-copyright-link',
  RSS: 'footer-rss',
};
const COPYRIGHT_TEXT = '2025';
const COPYRIGHT_URL =
  'https://github.com/rolling-scopes-school/tasks/tree/master/stage2/tasks/async-race';

class Footer extends Component {
  private copyrightLink = new Component({
    tag: 'a',
    className: [styles.COPYRIGHT_LINK],
    attributes: { href: COPYRIGHT_URL, target: 'blank' },
    text: 'async race',
  });
  private copyrightText = new Component({
    tag: 'p',
    className: [styles.COPYRIGHT],
    text: COPYRIGHT_TEXT,
  });
  private copyrightContainer = new Component({
    className: [styles.FOOTER_CONTAINER],
    children: [this.copyrightLink.getNode(), this.copyrightText.getNode()],
  });
  constructor() {
    super({ tag: 'footer', className: [styles.CONTAINER, styles.FOOTER] });
    this.appendChildren([this.copyrightContainer.getNode()]);
  }
}

export const footer = new Footer();
