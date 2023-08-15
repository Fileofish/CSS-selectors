import { globalDataStorage } from '../../shared/data/dataStorage';
import { ModeLoad } from '../../shared/types/enums';
import { Callback } from '../../shared/types/generics';

export class LevelSelector {
  private dataStorage = globalDataStorage;

  goToSelectedLevel = (selectedLevel: number, drawGamePageCallback: Callback<ModeLoad>): void => {
    this.dataStorage.currentLevel = selectedLevel;
    drawGamePageCallback(ModeLoad.load);
  };
}