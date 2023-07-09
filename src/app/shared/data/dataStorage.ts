import levelsData from './level-data.json';
import { LevelData } from '../types/interfaces';

export class DataStorage {
  levelsData = levelsData;
  currentLevel = 0;

  currentLevelData(): LevelData {
    return this.levelsData[this.currentLevel];
  }
}

export const globalDataStorage = new DataStorage();