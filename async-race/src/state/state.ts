import { garageAPI, winnersAPI } from '../api';
import { GARAGE_CARS_LIMIT, WINNERS_CARS_LIMIT } from '../constants';
import { GarageItem } from '../components/garage-item';
import type {
  ResponseCarsData,
  Winner,
  SortWinners,
  OrderWinners,
  WinnerForPage,
} from '../types';

class State {
  public carsArr: Array<ResponseCarsData>;
  public winnersArr: Array<WinnerForPage>;
  public garageItems: GarageItem[];
  public winnersSort: SortWinners;
  public winnersOrder: OrderWinners;

  constructor() {
    this.carsArr = [];
    this.winnersArr = [];
    this.garageItems = [];
    this.winnersSort = 'time';
    this.winnersOrder = 'DESC';
  }

  public cars = {
    curPage: 1,
    allPages: 1,
    allCars: '4',
    selectedId: 0,
    selectedName: '',
    selectedColor: '',
  };

  public winners = {
    curPage: 1,
    allPages: 1,
    allWinners: '1',
  };

  public updateCarsState = async () => {
    this.carsArr = await garageAPI.getCars(this.cars.curPage);
    const response = await garageAPI.getAllCars();

    if (response) {
      this.cars.allCars = response;
    }
    this.cars.allPages = Math.ceil(+this.cars.allCars / GARAGE_CARS_LIMIT);
  };

  public updateWinnersState = async () => {
    const winners: Array<Winner> = await winnersAPI.getWinners(
      this.winners.curPage,
      this.winnersSort,
      this.winnersOrder
    );

    const carsData: Promise<ResponseCarsData>[] = [];
    winners.forEach((winner) => {
      carsData.push(garageAPI.getCar(winner.id));
    });

    const cars = await Promise.all(carsData);
    const winnersData = winners.reduce((acc: Array<WinnerForPage>, winner) => {
      const wins = winner.wins;
      const time = winner.time;
      const car = cars.find((car) => car.id === winner.id);
      if (!car) return acc;
      const color = car.color;
      const name = car.name;
      acc.push({ color, name, wins, time });
      return acc;
    }, []);

    this.winnersArr = winnersData;
    const allWinners = await winnersAPI.getAllWinners();

    if (allWinners) {
      this.winners.allWinners = allWinners;
    }
    this.winners.allPages = Math.ceil(
      +this.winners.allWinners / WINNERS_CARS_LIMIT
    );
  };
}

export const state = new State();
