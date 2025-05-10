import './garage.scss';
import { Component } from '../../services';
import { carSettings } from '../../components/garage-settings';
import { GarageItem } from '../../components/garage-item';
import { garagePagination } from '../../components/pagination';
import { state } from '../../state';

const styles = {
  GARAGE: 'garage',
  COUNTER: 'cars-counter',
  PAGE_COUNTER: 'page-counter',
};

class Garage extends Component {
  private carsCounter = new Component({
    tag: 'h2',
    className: [styles.COUNTER],
  });
  private pageCounter = new Component({
    tag: 'h3',
    className: [styles.PAGE_COUNTER],
  });
  private readonly pagination;
  public carsContainer = new Component({ className: ['cars'] });

  constructor() {
    super({ tag: 'div', className: [styles.GARAGE] });
    this.pagination = garagePagination;
    this.appendChildren([
      carSettings.getNode(),
      this.carsCounter.getNode(),
      this.pageCounter.getNode(),
      this.carsContainer.getNode(),
      this.pagination.getNode(),
    ]);
    this.render().catch(console.error);
  }

  public async render() {
    await state.updateCarsState();
    this.renderCounters();
    this.renderCars();
    this.pagination.buttonsHandler();
  }

  private renderCounters() {
    this.carsCounter.setTextContent(`garage ( ${state.cars.allCars} )`);
    this.pageCounter.setTextContent(
      `page #${state.cars.curPage}  /  ${state.cars.allPages}`
    );
  }

  private renderCars() {
    this.carsContainer.destroyChildren();
    const cars = state.carsArr;
    const garageItems = cars.map(
      (car) => new GarageItem(car.name, car.color, car.id)
    );
    state.garageItems = garageItems;
    this.carsContainer.appendChildren(
      garageItems.map((item) => item.renderGarageItem())
    );
  }
}

export const garageView = new Garage();
