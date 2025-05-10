import type { ResponseCarsData } from '../types';

export function isArrayWithCarData(data: unknown): data is ResponseCarsData[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) => item && 'color' in item && 'id' in item && 'name' in item
    )
  );
}
