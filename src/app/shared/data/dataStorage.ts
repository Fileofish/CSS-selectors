import levelsData from './level-data.json';
import { LevelData } from '../types/interfaces';

export class DataStorage {
  levelsData: LevelData[];
  currentLevel: number;
  constructor() {
    this.levelsData = levelsData;
    this.currentLevel = 0;
  }
  currentLevelData() {
    return this.levelsData[this.currentLevel];
  }
}

export const globalDataStorage = new DataStorage();