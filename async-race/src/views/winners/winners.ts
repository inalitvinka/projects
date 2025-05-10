import './winners.scss';
import { Component, Button } from '../../services';
import { winnersPagination } from '../../components/pagination';
import { WINNERS_CARS_LIMIT } from '../../constants';
import { WinnerItem } from '../../components/winner-item';
import arrowSource from '../../assets/images/arrow.png';
import { state } from '../../state';

export const styles = {
  WINNERS: 'winners',
  CARS_COUNTER: 'cars-counter',
  PAGE_COUNTER: 'page-counter',
  WINNERS_TABLE: 'winners-table',
  WINNERS_ITEM: 'winners-item',
  WINNERS_BUTTON: 'winners-button',
  WINNERS_SORT: 'winners-sort',
  SORTED: 'sorted',
  WINNER: 'winner',
};

class Winners extends Component {
  private readonly winnersCounter = new Component<HTMLHeadingElement>({
    tag: 'h2',
    className: [styles.CARS_COUNTER],
  });
  private readonly pageCounter = new Component<HTMLHeadingElement>({
    tag: 'h3',
    className: [styles.PAGE_COUNTER],
  });
  private readonly number = new Component({
    className: [styles.WINNERS_ITEM],
    text: 'number',
  });
  private readonly car = new Component({
    className: [styles.WINNERS_ITEM],
    text: 'car',
  });
  private readonly name = new Button(
    [styles.WINNERS_ITEM, styles.WINNERS_BUTTON],
    'name',
    {
      type: 'button',
    }
  );
  private readonly nameArrow = new Component<HTMLImageElement>({
    tag: 'img',
    className: [styles.WINNERS_SORT],
    attributes: { src: arrowSource },
  });
  private readonly wins = new Button(
    [styles.WINNERS_ITEM, styles.WINNERS_BUTTON],
    'wins',
    {
      type: 'button',
    }
  );
  private readonly winsArrow = new Component<HTMLImageElement>({
    tag: 'img',
    className: [styles.WINNERS_SORT],
    attributes: { src: arrowSource },
  });
  private readonly time = new Button(
    [styles.WINNERS_ITEM, styles.WINNERS_BUTTON],
    'time',
    {
      type: 'button',
    }
  );
  private readonly timeArrow = new Component<HTMLImageElement>({
    tag: 'img',
    className: [styles.WINNERS_SORT],
    attributes: { src: arrowSource },
  });
  private readonly winnersTable = new Component({
    className: [styles.WINNERS_TABLE],
    children: [
      this.number.getNode(),
      this.car.getNode(),
      this.name.getNode(),
      this.wins.getNode(),
      this.time.getNode(),
    ],
  });
  private readonly pagination;
  public winnersContainer = new Component({});

  constructor() {
    super({ className: [styles.WINNERS] });
    this.pagination = winnersPagination;
    this.name.appendChildren([this.nameArrow.getNode()]);
    this.wins.appendChildren([this.winsArrow.getNode()]);
    this.time.appendChildren([this.timeArrow.getNode()]);
    this.appendChildren([
      this.winnersCounter.getNode(),
      this.pageCounter.getNode(),
      this.winnersTable.getNode(),
      this.winnersContainer.getNode(),
      this.pagination.getNode(),
    ]);
    this.initNameButton();
    this.initWinsButton();
    this.initTimeButton();
    this.render().catch(console.error);
  }

  public async render() {
    await state.updateWinnersState();
    this.renderCounters();
    this.renderWinners();
    this.checkWinnersSort();
    this.pagination.buttonsHandler();
  }

  private sortById() {
    this.winsArrow.setClassName(['hidden']);
    this.timeArrow.setClassName(['hidden']);
    this.nameArrow.removeClassName(['hidden']);
    this.nameArrow.toggleClass(styles.SORTED);
    state.winnersSort = 'id';
    this.toggleOrder();
    this.render().catch(console.error);
  }

  private initNameButton() {
    this.name.addOnClick(() => {
      this.sortById();
    });
  }

  private sortByWins() {
    this.winsArrow.removeClassName(['hidden']);
    this.timeArrow.setClassName(['hidden']);
    this.nameArrow.setClassName(['hidden']);
    state.winnersSort = 'wins';
    this.toggleOrder();
    this.render().catch(console.error);
  }

  private initWinsButton() {
    this.wins.addOnClick(() => {
      this.sortByWins();
    });
  }

  private sortByTime() {
    this.timeArrow.removeClassName(['hidden']);
    this.winsArrow.setClassName(['hidden']);
    this.nameArrow.setClassName(['hidden']);
    state.winnersSort = 'time';
    this.toggleOrder();
    this.render().catch(console.error);
  }

  private checkWinnersSort() {
    if (state.winnersSort === 'wins') {
      this.winsArrow.removeClassName(['hidden']);
      this.timeArrow.setClassName(['hidden']);
      this.nameArrow.setClassName(['hidden']);
    }
    if (state.winnersSort === 'time') {
      this.timeArrow.removeClassName(['hidden']);
      this.winsArrow.setClassName(['hidden']);
      this.nameArrow.setClassName(['hidden']);
    }
    if (state.winnersSort === 'id') {
      this.nameArrow.removeClassName(['hidden']);
      this.timeArrow.setClassName(['hidden']);
      this.winsArrow.setClassName(['hidden']);
    }
  }

  private toggleOrder() {
    state.winnersOrder = state.winnersOrder === 'ASC' ? 'DESC' : 'ASC';
    this.timeArrow.toggleClass(styles.SORTED);
    this.winsArrow.toggleClass(styles.SORTED);
  }

  private initTimeButton() {
    this.time.addOnClick(() => {
      this.sortByTime();
    });
  }

  private renderCounters() {
    this.winnersCounter.setTextContent(
      `Winners ( ${state.winners.allWinners} )`
    );
    this.pageCounter.setTextContent(
      `Page #${state.winners.curPage} / ${state.winners.allPages}`
    );
  }

  private renderWinners() {
    this.winnersContainer.destroyChildren();
    const winnersItems = state.winnersArr.map(
      (winner, index) =>
        new WinnerItem({
          number: index + 1 + WINNERS_CARS_LIMIT * (state.winners.curPage - 1),
          color: winner.color,
          name: winner.name,
          wins: winner.wins,
          time: winner.time,
        })
    );
    this.winnersContainer.appendChildren(
      winnersItems.map((item) => item.renderWinnerItem())
    );
  }
}

export const winnersView = new Winners();
