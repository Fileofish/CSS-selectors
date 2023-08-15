import { globalDataStorage } from '../../shared/data/dataStorage';
import { SaveData } from '../../shared/types/interfaces';

export class Saver {
  private dataStorage = globalDataStorage;

  listenToAutoSave(): void {
    window.onbeforeunload = this.saveGame;
  }

  private saveGame = (): void => {
    const saveData: SaveData = {
      currentLevel: this.dataStorage.currentLevel,
      isPassedLevels: [],
      isHintedLevels: [],
    };

    this.dataStorage.levelsData.forEach((levelNum) => {
      saveData.isPassedLevels.push(levelNum.isPassed);
      saveData.isHintedLevels.push(levelNum.isHint);
    });
    localStorage.setItem('CSSPrankstersData', JSON.stringify(saveData));
  };
}