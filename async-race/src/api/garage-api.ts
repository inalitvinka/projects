import { isArrayWithCarData, isCarData } from '../services';
import type { ResponseCarsData, DriveStatus, ResponseDistance } from '../types';
import { GARAGE_CARS_LIMIT } from '../constants';

class GarageApi {
  private GARAGE = 'http://127.0.0.1:3000/garage';
  private ENGINE = 'http://127.0.0.1:3000/engine';
  private WINNERS = 'http://127.0.0.1:3000/winners';

  public async getCars(
    pageNumber: number,
    limit: number = GARAGE_CARS_LIMIT
  ): Promise<ResponseCarsData[]> {
    const response = await fetch(
      `${this.GARAGE}?_page=${pageNumber}&_limit=${limit}`
    );
    const data: unknown = await response.json();
    if (!isArrayWithCarData(data)) {
      throw new TypeError('Invalid car data');
    }
    return data;
  }

  public async getCar(id: number): Promise<ResponseCarsData> {
    const response = await fetch(`${this.GARAGE}/${id}`);
    const data: unknown = await response.json();
    if (!isCarData(data)) {
      throw new TypeError('Invalid car data');
    }
    return data;
  }

  public async getAllCars() {
    const response = await fetch(`${this.GARAGE}?_limit=${GARAGE_CARS_LIMIT}`);
    const totalCount = response.headers.get('X-Total-Count');
    return totalCount;
  }

  public async startCar(id: number): Promise<ResponseDistance> {
    const status: DriveStatus = 'started';
    const response = await fetch(`${this.ENGINE}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });

    const data: unknown = await response.json();
    if (typeof data !== 'object' || data === null)
      throw new TypeError('Invalid data');

    let distance: number | null = null;
    let velocity: number | null = null;

    if ('distance' in data && typeof data.distance === 'number')
      distance = data.distance;
    if ('velocity' in data && typeof data.velocity === 'number')
      velocity = data.velocity;
    if (distance === null || velocity === null)
      throw new TypeError('Invalid data');
    return { distance, velocity };
  }

  public async driveCar(
    id: number,
    controller: AbortController
  ): Promise<Response> {
    const status: DriveStatus = 'drive';
    const response = await fetch(`${this.ENGINE}?id=${id}&status=${status}`, {
      method: 'PATCH',
      signal: controller.signal,
    });
    return response;
  }

  public async stopCar(id: number): Promise<Response> {
    const status: DriveStatus = 'stopped';
    const response = await fetch(`${this.ENGINE}?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    return response;
  }

  public async createCar(name: string, color: string): Promise<Response> {
    const body = JSON.stringify({ name, color });
    const response = await fetch(`${this.GARAGE}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    return response;
  }

  public async deleteCar(id: number): Promise<Response> {
    const response = await fetch(`${this.GARAGE}/${id}`, {
      method: 'DELETE',
    });
    return response;
  }

  public async updateCar(name: string, color: string, id: number | undefined) {
    const body = JSON.stringify({ name, color });
    const response = await fetch(`${this.GARAGE}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    return response;
  }
}

export const garageAPI = new GarageApi();
