import { DataStorage, globalDataStorage } from '../../shared/data/dataStorage';
import { Callback } from '../../shared/types/generics';
import { Cleaner } from './cleaner';

export class LevelSelector {
  private dataStorage: DataStorage;
  private cleaner: Cleaner;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.cleaner = new Cleaner();
  }
  goToSelectedLevel = (selectedLevel: number, drawGamePageCallback: Callback<string>): void => {
    this.dataStorage.currentLevel = selectedLevel;
    this.cleaner.cleanGameArea(true);
    drawGamePageCallback('load');
  };
}