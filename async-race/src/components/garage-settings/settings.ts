import './settings.scss';
import { Component, Button, randomColor, randomName } from '../../services';
import { garageAPI, winnersAPI } from '../../api';
import { garageView } from '../../views/garage';
import { state } from '../../state';
import { header } from '../header';
import { winnersView } from '../../views/winners';
import { garagePagination } from '../pagination';
import type { DriveData } from '../../types';

const styles = {
  SETTINGS: 'settings',
  TEXT: 'settings-text',
  COLOR: 'settings-color',
  TEXT_CREATE: 'settings-text_create',
  COLOR_CREATE: 'settings-color_create',
  TEXT_UPDATE: 'settings-text_update',
  COLOR_UPDATE: 'settings-color_update',
  CREATE_BUTTON: 'car-create',
  UPDATE_BUTTON: 'car-update',
  RACE_BUTTON: 'car-race',
  RESET_BUTTON: 'car-reset',
  GENERATE_BUTTON: 'car-generate',
  BUTTON: 'button',
  RACE_WINNER: 'race-winner',
};
const CREATE_BTN_TEXT = 'create';
const UPDATE_BTN_TEXT = 'update';
const RACE_BTN_TEXT = 'race';
const RESET_BTN_TEXT = 'reset';
const GENERATE_BTN_TEXT = 'generate cars';

class Settings extends Component {
  private INIT_COLOR = '#DCEAE6';
  private readonly textInputCreation = new Component<HTMLInputElement>({
    tag: 'input',
    className: [styles.TEXT, styles.TEXT_CREATE],
    attributes: { type: 'text' },
  });
  private readonly colorInputCreation = new Component<HTMLInputElement>({
    tag: 'input',
    className: [styles.COLOR, styles.COLOR_CREATE],
    attributes: { type: 'color', value: this.INIT_COLOR },
  });
  private readonly createButton = new Button(
    [styles.BUTTON, styles.CREATE_BUTTON],
    CREATE_BTN_TEXT,
    { type: 'button' }
  );
  private readonly raceButton = new Button(
    [styles.BUTTON, styles.RACE_BUTTON],
    RACE_BTN_TEXT,
    { type: 'button' }
  );
  private readonly resetButton = new Button(
    [styles.BUTTON, styles.RESET_BUTTON],
    RESET_BTN_TEXT,
    { type: 'button' }
  );
  private readonly generateButton = new Button(
    [styles.BUTTON, styles.GENERATE_BUTTON],
    GENERATE_BTN_TEXT,
    { type: 'button' }
  );
  private readonly message = new Component({
    className: [styles.RACE_WINNER],
  });
  public readonly updateButton = new Button(
    [styles.BUTTON, styles.UPDATE_BUTTON],
    UPDATE_BTN_TEXT,
    { type: 'button', disabled: 'true' }
  );
  public readonly textInputUpdate = new Component<HTMLInputElement>({
    tag: 'input',
    className: [styles.TEXT, styles.TEXT_UPDATE],
    attributes: { type: 'text', disabled: 'true' },
  });
  public colorInputUpdate = new Component<HTMLInputElement>({
    tag: 'input',
    className: [styles.COLOR, styles.COLOR_UPDATE],
    attributes: { type: 'color', value: this.INIT_COLOR, disabled: 'true' },
  });
  constructor() {
    super({ className: [styles.SETTINGS] });
    this.appendChildren([
      this.textInputCreation.getNode(),
      this.colorInputCreation.getNode(),
      this.createButton.getNode(),
      this.textInputUpdate.getNode(),
      this.colorInputUpdate.getNode(),
      this.updateButton.getNode(),
      this.raceButton.getNode(),
      this.resetButton.getNode(),
      this.generateButton.getNode(),
    ]);
    this.inputsCreationHandler();
    this.initUpdateButton();
    this.initRaceButton();
    this.initResetButton();
    this.initGenerateButton();
  }

  private async createCar() {
    const carName = this.textInputCreation.getNode().value;
    const carColor = this.colorInputCreation.getNode().value;
    this.textInputCreation.getNode().value = '';
    this.colorInputCreation.getNode().value = this.INIT_COLOR;
    await garageAPI.createCar(carName, carColor);
    garageView.render().catch(console.error);
  }

  private inputsCreationHandler() {
    this.createButton.addOnClick(() => {
      this.createCar().catch(console.error);
    });
  }

  private async updateGarageItem() {
    const carName = this.textInputUpdate.getNode().value;
    const carColor = this.colorInputUpdate.getNode().value;

    await garageAPI.updateCar(carName, carColor, state.cars.selectedId);
    await garageView.render().catch(console.error);
    this.textInputUpdate.getNode().value = '';
    this.colorInputUpdate.getNode().value = this.INIT_COLOR;
    this.updateButton.setAttribute({ disabled: 'true' });
    this.textInputUpdate.setAttribute({ disabled: 'true' });
    this.colorInputUpdate.setAttribute({ disabled: 'true' });
  }

  private initUpdateButton() {
    this.updateButton.addOnClick(() => {
      this.updateGarageItem().catch(console.error);
    });
  }

  private async race() {
    const drivePromises: Promise<DriveData>[] = state.garageItems.map(
      (item) => {
        return item.start();
      }
    );

    const drivePromise: DriveData = await Promise.any<DriveData>(drivePromises);
    const { name, id, time } = drivePromise;
    const timeToSeconds = +(time / 1000).toFixed(2);
    this.messageResult(name, timeToSeconds);
    setTimeout(() => this.message.getNode().remove(), 7000);
    const response = await winnersAPI.getWinner(id);
    if (!response.ok) {
      await winnersAPI.createWinner({ id, time: timeToSeconds });
    }
    if (response.ok) {
      await this.updateWinnerData(id, timeToSeconds, response);
    }
    await winnersView.render().catch(console.error);
  }

  private messageResult(name: string, time: number) {
    this.message.setTextContent('');
    this.message.setTextContent(
      `${name.toUpperCase()} won with time ${time} sec`
    );
    garageView.appendChildren([this.message.getNode()]);
  }
  private async updateWinnerData(
    idCar: number,
    timeCar: number,
    response: Response
  ): Promise<void> {
    const responseJSON: unknown = await response.json();
    if (typeof responseJSON !== 'object' || responseJSON === null) return;

    let id: number | null = null;
    let time: number | null = null;
    let wins: number | null = null;

    if ('id' in responseJSON && typeof responseJSON.id === 'number')
      id = responseJSON.id;
    if ('time' in responseJSON && typeof responseJSON.time === 'number')
      time = responseJSON.time;
    if ('wins' in responseJSON && typeof responseJSON.wins === 'number')
      wins = responseJSON.wins;
    if (id === null || time === null || wins === null) return;
    wins += 1;
    time = Math.min(time, timeCar);
    await winnersAPI.updateWinner({ id, wins, time });
  }

  private initRaceButton() {
    this.raceButton.addOnClick(() => {
      this.race().catch(console.error);
      this.disableButtons();
    });
  }

  private raceReset() {
    state.garageItems.map((item) => void item.reset());
    setTimeout(() => this.turnOnButtons(), 2000);
  }

  private initResetButton() {
    this.resetButton.addOnClick(() => {
      this.raceReset();
    });
  }

  private async generateAHundretCars() {
    let carsCounter = 100;
    while (carsCounter > 0) {
      await garageAPI
        .createCar(randomName(), randomColor())
        .then(() => {
          carsCounter -= 1;
        })
        .catch(console.error);
    }
    garageView.render().catch(console.error);
  }

  private initGenerateButton() {
    this.generateButton.addOnClick(() => {
      this.generateAHundretCars().catch(console.error);
    });
  }

  private disableButtons() {
    header.ButtonGarage.setAttribute({ disabled: 'true' });
    header.ButtonWinners.setAttribute({ disabled: 'true' });
    this.raceButton.setAttribute({ disabled: 'true' });
    this.generateButton.setAttribute({ disabled: 'true' });
    this.createButton.setAttribute({ disabled: 'true' });
    this.textInputCreation.setAttribute({ disabled: 'true' });
    this.colorInputCreation.setAttribute({ disabled: 'true' });
    garagePagination.prevButton.setAttribute({ disabled: 'true' });
    garagePagination.nextButton.setAttribute({ disabled: 'true' });
  }

  private turnOnButtons() {
    header.ButtonGarage.removeAttribute('disabled');
    header.ButtonWinners.removeAttribute('disabled');
    this.raceButton.removeAttribute('disabled');
    this.generateButton.removeAttribute('disabled');
    this.createButton.removeAttribute('disabled');
    this.textInputCreation.removeAttribute('disabled');
    this.colorInputCreation.removeAttribute('disabled');
    garagePagination.prevButton.removeAttribute('disabled');
    garagePagination.nextButton.removeAttribute('disabled');
    garagePagination.buttonsHandler();
  }
}

export const carSettings = new Settings();
