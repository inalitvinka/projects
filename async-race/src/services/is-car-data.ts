import type { ResponseCarsData } from '../types';

export function isCarData(data: unknown): data is ResponseCarsData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'color' in data &&
    'id' in data &&
    'name' in data
  );
}
