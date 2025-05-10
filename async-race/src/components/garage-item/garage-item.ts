import './garage-item.scss';
import { garageAPI, winnersAPI } from '../../api';
import { Component, Button } from '../../services';
import { garageView } from '../../views/garage';
import { winnersView } from '../../views/winners';
import { carSettings } from '../garage-settings';
import { state } from '../../state';
import type { DriveData } from '../../types';

const styles = {
  BUTTON: 'button',
  ITEM_CONTAINER: 'cars-container',
  ITEM_TITLE: 'cars-title',
  BUTTON_CONTAINER: 'cars-buttons',
  BUTTON_START: 'cars-start',
  BUTTON_RESET: 'cars-reset',
  BUTTON_REMOVE: 'cars-remove',
  BUTTON_SELECT: 'cars-select',
  FINISH: 'cars-finish',
  MODAL: 'modal',
};

export class GarageItem {
  private name;
  private color;
  private flag;
  private controller = new AbortController();
  private startButton = new Button([styles.BUTTON, styles.BUTTON_START], '', {
    type: 'button',
    title: 'start',
  });
  private resetButton = new Button([styles.BUTTON, styles.BUTTON_RESET], '', {
    type: 'button',
    title: 'reset',
    disabled: 'true',
  });
  private selectButton = new Button([styles.BUTTON, styles.BUTTON_SELECT], '', {
    type: 'button',
    title: 'select',
  });
  private removeButton = new Button([styles.BUTTON, styles.BUTTON_REMOVE], '', {
    type: 'button',
    title: 'remove',
  });
  public id;
  public car;
  constructor(name?: string, color?: string, id?: number) {
    this.name = name;
    this.color = color;
    this.id = id;
    this.car = this.createItem();
    this.flag = this.createFinishFlag();

    this.initStartButton();
    this.initResetButton();
    this.initSelectButton();
    this.initRemoveButton();
  }

  public selectCar() {
    carSettings.textInputUpdate.removeAttribute('disabled');
    carSettings.colorInputUpdate.removeAttribute('disabled');
    carSettings.updateButton.removeAttribute('disabled');
    if (this.id) {
      state.cars.selectedId = this.id;
    }
    if (this.name) {
      state.cars.selectedName = this.name;
      carSettings.textInputUpdate.getNode().value = this.name;
    }
    if (this.color) {
      state.cars.selectedColor = this.color;
      carSettings.colorInputUpdate.getNode().value = this.color;
    }
  }

  public initSelectButton() {
    this.selectButton.addOnClick(() => {
      this.selectCar();
    });
  }

  public async deleteCar() {
    if (!this.id) return;
    await winnersAPI.deleteWinner(this.id);
    await garageAPI.deleteCar(this.id);
    garageView.render().catch(console.error);
    winnersView.render().catch(console.error);
  }

  public initRemoveButton() {
    this.removeButton.addOnClick(() => {
      this.deleteCar().catch(console.error);
    });
  }

  public async start(): Promise<DriveData> {
    this.controller = new AbortController();
    this.startButton.setAttribute({ disabled: 'true' });
    this.selectButton.setAttribute({ disabled: 'true' });
    this.removeButton.setAttribute({ disabled: 'true' });
    this.resetButton.removeAttribute('disabled');

    if (!this.id) throw new Error('ID does not exist');
    const { distance, velocity } = await garageAPI.startCar(this.id);
    const time = distance / velocity;
    this.car.classList.add('start');
    this.car.style.animationPlayState = '';
    this.car.style.animationDuration = `${time}ms`;
    return new Promise((resolve, reject) => {
      if (!this.id) return;
      garageAPI
        .driveCar(this.id, this.controller)
        .then((response) => {
          const id = this.id;
          const name = this.name;
          if (!response.ok) {
            this.stopCar();
            throw new Error(`Car is brocken>> ${id}`);
          }
          if (!id || !name) {
            reject(new Error('Error'));
          } else {
            resolve({ id, name, time });
          }
        })
        .catch(() => {});
    });
  }

  public async reset() {
    this.controller.abort();
    if (!this.id) return;
    await garageAPI.stopCar(this.id);
    this.controller = new AbortController();
    this.car.classList.remove('start');
    this.car.style.transform = 'translateX(0)';
    this.resetButton.setAttribute({ disabled: 'true' });
    this.startButton.removeAttribute('disabled');
    this.selectButton.removeAttribute('disabled');
    this.removeButton.removeAttribute('disabled');
  }

  public renderGarageItem() {
    const title = new Component({
      tag: 'h5',
      text: this.name,
      className: [styles.ITEM_TITLE],
    });
    const controlContainer = new Component({
      className: [styles.BUTTON_CONTAINER],
    });
    controlContainer.appendChildren([
      this.startButton.getNode(),
      this.resetButton.getNode(),
      this.selectButton.getNode(),
      this.removeButton.getNode(),
      title.getNode(),
    ]);
    const container = new Component({
      className: [styles.ITEM_CONTAINER],
      children: [controlContainer.getNode(), this.car, this.flag],
    });
    return container.getNode();
  }

  private createItem() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = '4.2rem';
    svg.style.height = '4.2rem';
    if (this.color) {
      svg.style.fill = this.color;
    }
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#car');
    svg.append(use);
    return svg;
  }

  private createFinishFlag() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = '4rem';
    svg.style.height = '4rem';
    svg.classList.add(styles.FINISH);
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#finish');
    svg.append(use);
    return svg;
  }

  private initStartButton() {
    this.startButton.addOnClick(() => {
      this.start().catch(console.error);
    });
  }

  private initResetButton() {
    this.resetButton.addOnClick(() => {
      this.reset().catch(console.error);
    });
  }

  private stopCar() {
    this.car.style.animationPlayState = 'paused';
  }
}
