import { DataStorage, globalDataStorage } from '../../../../../shared/data/dataStorage';
import { Callback } from '../../../../../shared/types/generics';

export class CssEditorEnter {
  private dataStorage: DataStorage;
  private checkWinLevelCallback: Callback<boolean> | null;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.checkWinLevelCallback = null;
  }

  cleanupListeners(checkWinLevelCallback: Callback<boolean>) {
    const enterButton = document.querySelector('.css-editor__form__button--enter');

    this.checkWinLevelCallback = checkWinLevelCallback;
    document.removeEventListener('keydown', this.keydownListener);
    enterButton?.removeEventListener('click', this.clickListener);
  }

  pushEnterKey() {
    document.addEventListener('keydown', this.keydownListener);
  }

  listenClickEnterButton() {
    const enterButton = document.querySelector('.css-editor__form__button--enter');

    enterButton?.addEventListener('click', this.clickListener);
  }

  private clickListener = () => {
    if (this.checkWinLevelCallback) {
      const isWin = this.checkValue();

      this.checkWinLevelCallback(isWin);
    }
  };

  private keydownListener = (event: KeyboardEvent) => {
    const enterButton = document.querySelector('.css-editor__form__button--enter');

    if (event.key === 'Enter' && this.checkWinLevelCallback) {
      const isWin = this.checkValue();

      enterButton?.classList.add('active');
      setTimeout(() => {
        enterButton?.classList.remove('active');
      }, 150);

      this.checkWinLevelCallback(isWin);
    } 
  };

  private checkValue(): boolean {
    const gameInput = document.querySelector('.css-editor__form__input') as HTMLInputElement;
    const inputValue = gameInput?.value.trim() as string;
    const checkValue = this.dataStorage.currentLevelData().winCondition.includes(inputValue);

    if (checkValue) gameInput.value = '';

    return checkValue;
  }
}