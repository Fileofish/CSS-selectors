import { Callback } from '../../../../shared/types/generics';
import { LevelData } from '../../../../shared/types/interfaces';

export class EnterPresser {
  private callback: Callback<boolean> | null;
  private levelData: LevelData | null;
  constructor() {
    this.callback = null;
    this.levelData = null;
  }

  listenTo(levelData: LevelData, callback: Callback<boolean>): void {
    this.callback = callback;
    this.levelData = levelData;

    this.cleanupListeners();
    this.pushEnterKey();
    this.clickEnterButton();
  }

  private pushEnterKey() {
    document.addEventListener('keydown', this.keydownListener);
  }

  private cleanupListeners() {
    const enterKey = document.querySelector('.CSS-editor__form__button');

    document.removeEventListener('keydown', this.keydownListener);
    enterKey?.removeEventListener('click', this.clickListener);
  }

  private clickEnterButton() {
    const enterKey = document.querySelector('.CSS-editor__form__button');

    enterKey?.addEventListener('click', this.clickListener);
  }

  private clickListener = () => {
    if (this.levelData && this.callback) {
      const isWin = this.checkValue(this.levelData);

      this.callback(isWin);
    }
  };

  private keydownListener = (event: KeyboardEvent) => {
    const enterKey = document.querySelector('.CSS-editor__form__button');

    if (event.key === 'Enter' && this.levelData && this.callback) {
      const isWin = this.checkValue(this.levelData);

      enterKey?.classList.add('active');
      setTimeout(() => {
        enterKey?.classList.remove('active');
      }, 150);

      this.callback(isWin);
    } 
  };

  private checkValue(levelData: LevelData): boolean {
    const gameInput = document.querySelector('.CSS-editor__form__input') as HTMLInputElement;
    const inputValue = gameInput?.value.trim() as string;
    const checkValue = levelData.winCondition.includes(inputValue);

    if (checkValue) gameInput.value = '';

    return checkValue;
  }
}