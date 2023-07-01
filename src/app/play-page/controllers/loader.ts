import { DataStorage, globalDataStorage } from '../../shared/data/dataStorage';
import { SaveData } from '../../shared/types/interfaces';

export class Loader{
  private dataStorage: DataStorage;
  constructor() {
    this.dataStorage = globalDataStorage;
  }

  loadDataGame() {
    const dataSave = localStorage.getItem('CSSPrankstersData');

    if (dataSave !== null) {
      const parseDataSave: SaveData = JSON.parse(dataSave);

      this.dataStorage.currentLevel = parseDataSave.currentLevel;
      parseDataSave.isPassedLevels.forEach((saveCondition, index) => {
        this.dataStorage.levelsData[index].isPassed = saveCondition;
      });
      parseDataSave.isHintedLevels.forEach((saveCondition, index) => {
        this.dataStorage.levelsData[index].isHint = saveCondition;
      });
    }
  }
}