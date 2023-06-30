import { DataStorage, globalDataStorage } from '../../shared/data/dataStorage';
import { SaveData } from '../../shared/types/interfaces';

export class Saver {
  private dataStorage: DataStorage;
  constructor() {
    this.dataStorage = globalDataStorage;
  }

  listenToAutoSave(): void {
    window.onbeforeunload = () => {
      const saveData: SaveData = {
        currentLevel: this.dataStorage.currentLevel,
        isPassedLevels: [],
      };

      this.dataStorage.levelsData.forEach((levelNum) => {
        saveData.isPassedLevels.push(levelNum.isPassed);
      });

      localStorage.setItem('CSSPrankstersData', JSON.stringify(saveData));
    };
  }
}