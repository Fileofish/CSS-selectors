import { DataStorage } from '../../shared/data/dataStorage';
import { SaveData } from '../../shared/types/interfaces';

export class Loader{
  private dataStorage: DataStorage;
  constructor() {
    this.dataStorage = new DataStorage();
  }

  loadDataGame() {
    const dataSave = localStorage.getItem('CSSPrankstersData');

    if (dataSave !== null) {
      const paseDataSave: SaveData = JSON.parse(dataSave);

      this.dataStorage.currentLevel = paseDataSave.currentLevel;
      paseDataSave.isPassedLevels.forEach((saveLevel, index) => {
        this.dataStorage.levelsData[index].isPassed = saveLevel;
      });
    }
  }
}