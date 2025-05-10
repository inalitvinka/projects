import type { Winner } from '../types';

export function isArrayWithWinnerData(data: unknown): data is Winner[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) => item && 'id' in item && 'wins' in item && 'time' in item
    )
  );
}
