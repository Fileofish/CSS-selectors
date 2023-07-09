import { globalDataStorage } from '../../shared/data/dataStorage';
import { SaveData } from '../../shared/types/interfaces';

export class Loader{
  private dataStorage = globalDataStorage;

  loadDataGame(): void {
    try {
      const dataSave = localStorage.getItem('CSSPrankstersData');

      if (dataSave !== null) {
        const parseDataSave: SaveData = JSON.parse(dataSave);
        
        this.dataStorage.currentLevel = parseDataSave.currentLevel;

        for (let i = 0; i < parseDataSave.isPassedLevels.length; i++) {
          this.dataStorage.levelsData[i].isPassed = parseDataSave.isPassedLevels[i];
          this.dataStorage.levelsData[i].isHint = parseDataSave.isHintedLevels[i];
        }
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}