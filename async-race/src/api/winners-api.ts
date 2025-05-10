import { isArrayWithWinnerData } from '../services';
import type { Winner, SortWinners, OrderWinners } from '../types';
import { WINNERS_CARS_LIMIT } from '../constants';

class WinnersApi {
  private WINNERS = 'http://127.0.0.1:3000/winners';

  public async getWinners(
    page: number,
    sort: SortWinners,
    order: OrderWinners
  ): Promise<Winner[]> {
    const endpoint = `${this.WINNERS}?_page=${page}&_limit=${WINNERS_CARS_LIMIT}&_sort=${sort}&_order=${order}`;
    const response = await fetch(endpoint);
    const data: unknown = await response.json();
    if (!isArrayWithWinnerData(data)) {
      throw new TypeError('Invalid data');
    }
    return data;
  }

  public async getWinner(id: number) {
    const response = await fetch(`${this.WINNERS}/${id}`);
    return response;
  }

  public async getAllWinners() {
    const response = await fetch(
      `${this.WINNERS}?_limit=${WINNERS_CARS_LIMIT}`
    );
    return response.headers.get('X-Total-Count');
  }

  public async createWinner({ id, time, wins = 1 }: Partial<Winner>) {
    const body = JSON.stringify({ id, wins, time });
    await fetch(`${this.WINNERS}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
  }

  public async deleteWinner(id: number) {
    await fetch(`${this.WINNERS}/${id}`, {
      method: 'DELETE',
    });
  }

  public async updateWinner({ id, wins, time }: Winner) {
    const body = JSON.stringify({ wins, time });
    await fetch(`${this.WINNERS}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
  }
}

export const winnersAPI = new WinnersApi();
