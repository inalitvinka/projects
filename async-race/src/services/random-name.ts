import { carModels } from '../constants';

export function randomName() {
  const nameIndex = Math.floor(Math.random() * carModels.length);
  const modelIndex = Math.floor(
    Math.random() * carModels[nameIndex].models.length
  );
  return `${carModels[nameIndex].name} ${carModels[nameIndex].models[modelIndex]}`;
}
