import { Callback } from '../../shared/types/generics';
import { SaveData } from '../../shared/types/interfaces';

export class Loader{
  loadDataGame(getSaveData: Callback<SaveData>) {
    const saveData = localStorage.getItem('CSSPrankstersData');

    if (saveData !== null) getSaveData(JSON.parse(saveData));
  }
}