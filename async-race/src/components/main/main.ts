import './main.scss';
import { Component } from '../../services';
import { garageView } from '../../views/garage';

const styles = {
  CONTAINER: 'container',
  MAIN: 'main',
};

class Main extends Component {
  constructor() {
    super({ tag: 'main', className: [styles.CONTAINER, styles.MAIN] });
    this.appendChildren([garageView.getNode()]);
  }
}

export const main = new Main();
