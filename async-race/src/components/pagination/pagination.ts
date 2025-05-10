import './pagination.scss';
import { Component, Button } from '../../services';
import { garageView } from '../../views/garage';
import { winnersView } from '../../views/winners';
import { state } from '../../state';

export const styles = {
  PAGINATION: 'pagination',
  PREV: 'pagination-prev',
  NEXT: 'pagination-next',
  BUTTON: 'button',
};

type PaginationConfig = {
  getState: () => { curPage: number; allPages: number };
  setPage: (newPage: number) => void;
  renderView: () => Promise<void>;
};

class Pagination extends Component {
  public prevButton = new Button([styles.BUTTON, styles.PREV], '', {
    type: 'button',
  });
  public nextButton = new Button([styles.BUTTON, styles.NEXT], '', {
    type: 'button',
  });
  private config: PaginationConfig;
  constructor(config: PaginationConfig) {
    super({ className: [styles.PAGINATION] });
    this.config = config;
    this.appendChildren([this.prevButton.getNode(), this.nextButton.getNode()]);

    this.initNextButton();
    this.initPrevButton();
  }

  public buttonsHandler() {
    const { curPage, allPages } = this.config.getState();

    if (curPage < allPages && allPages > 1) {
      this.nextButton.removeAttribute('disabled');
    } else {
      this.nextButton.setAttribute({ disabled: 'true' });
    }

    if (curPage > 1 && allPages > 1) {
      this.prevButton.removeAttribute('disabled');
    } else {
      this.prevButton.setAttribute({ disabled: 'true' });
    }
  }

  private nextPage() {
    const { curPage } = this.config.getState();
    this.config.setPage(curPage + 1);
    this.config.renderView().catch(console.error);
  }

  private prevPage() {
    const { curPage } = this.config.getState();
    this.config.setPage(curPage - 1);
    this.config.renderView().catch(console.error);
  }

  private initNextButton() {
    this.nextButton.addOnClick(() => this.nextPage());
  }

  private initPrevButton() {
    this.prevButton.addOnClick(() => this.prevPage());
  }
}

export const garagePagination = new Pagination({
  getState: () => state.cars,
  setPage: (newPage) => {
    state.cars.curPage = newPage;
  },
  renderView: () => garageView.render(),
});

export const winnersPagination = new Pagination({
  getState: () => state.winners,
  setPage: (newPage) => {
    state.winners.curPage = newPage;
  },
  renderView: () => winnersView.render(),
});
