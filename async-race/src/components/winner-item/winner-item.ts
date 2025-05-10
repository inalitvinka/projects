import { Component } from '../../services';
import { styles } from '../../views/winners';
import { GarageItem } from '../garage-item';

type WinnersItem = {
  number: number;
  color: string;
  name: string;
  wins: number;
  time: number;
};

export class WinnerItem {
  private name;
  private color;
  private number;
  private wins;
  private time;
  private car: SVGSVGElement;
  private readonly carNumber = new Component<HTMLLIElement>({
    tag: 'li',
    className: [styles.WINNERS_ITEM, styles.WINNER],
  });
  private readonly carModel = new Component<HTMLLIElement>({
    tag: 'li',
    className: [styles.WINNERS_ITEM, styles.WINNER],
  });
  private readonly carName = new Component<HTMLLIElement>({
    tag: 'li',
    className: [styles.WINNERS_ITEM, styles.WINNER],
  });
  private readonly winsAmount = new Component<HTMLLIElement>({
    tag: 'li',
    className: [styles.WINNERS_ITEM, styles.WINNER],
  });
  private readonly timeResult = new Component<HTMLLIElement>({
    tag: 'li',
    className: [styles.WINNERS_ITEM, styles.WINNER],
  });

  constructor({ number, color, name, wins, time }: WinnersItem) {
    this.number = number;
    this.wins = wins;
    this.time = time;
    this.name = name;
    this.color = color;

    this.car = new GarageItem().car;
  }

  public renderWinnerItem() {
    this.car.style.fill = this.color;
    this.car.style.width = '9rem';
    this.car.style.height = '3rem';
    this.car.classList.add(styles.WINNER);
    this.carNumber.setTextContent(`${this.number}`);
    this.carName.setTextContent(this.name);
    this.winsAmount.setTextContent(`${this.wins}`);
    this.timeResult.setTextContent(`${this.time}`);
    const container = new Component<HTMLUListElement>({
      tag: 'ul',
      className: [styles.WINNERS_TABLE],
      children: [
        this.carNumber.getNode(),
        this.car,
        this.carName.getNode(),
        this.winsAmount.getNode(),
        this.timeResult.getNode(),
      ],
    });
    return container.getNode();
  }
}
