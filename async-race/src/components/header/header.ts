import './header.scss';
import { Component, Button } from '../../services';
import { main } from '../main';
import { garageView } from '../../views/garage';
import { winnersView } from '../../views/winners';

const styles = {
  CONTAINER: 'container',
  HEADER: 'header',
  NAV: 'nav',
  BUTTON: 'button',
};

class Header extends Component {
  private nav = new Component({
    tag: 'nav',
    className: [styles.CONTAINER, styles.NAV],
  });
  public ButtonGarage = new Button([styles.BUTTON], 'garage', {
    type: 'button',
  });
  public ButtonWinners = new Button([styles.BUTTON], 'winners', {
    type: 'button',
  });
  constructor() {
    super({ tag: 'header', className: [styles.CONTAINER, styles.HEADER] });
    this.nav.appendChildren([
      this.ButtonGarage.getNode(),
      this.ButtonWinners.getNode(),
    ]);
    this.append(this.nav);
    this.initWinnersButton();
    this.initGarageButton();
  }

  public goToWinners() {
    main.destroyChildren();
    main.append(winnersView);
  }

  public goToGarage() {
    main.destroyChildren();
    main.append(garageView);
  }

  private initWinnersButton() {
    this.ButtonWinners.addOnClick(() => {
      this.goToWinners();
    });
  }

  private initGarageButton() {
    this.ButtonGarage.addOnClick(() => {
      this.goToGarage();
    });
  }
}

export const header = new Header();
