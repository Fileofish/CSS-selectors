import { DataStorage, globalDataStorage } from '../../../../../shared/data/dataStorage';
import { Callback } from '../../../../../shared/types/generics';

export class CssEditorEnter {
  private dataStorage: DataStorage;
  private checkInputValueCallback: Callback<string> | null;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.checkInputValueCallback = null;
  }

  cleanupListeners(checkInputValueCallback: Callback<string>): void {
    const enterButton = document.querySelector('.css-editor__form__button--enter');

    this.checkInputValueCallback = checkInputValueCallback;
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

  private clickListener = (): void => {
    if (this.checkInputValueCallback) {
      const inputValue = this.checkValue();

      this.checkInputValueCallback(inputValue);
    }
  };

  private keydownListener = (event: KeyboardEvent): void => {
    const enterButton = document.querySelector('.css-editor__form__button--enter');

    if (event.key === 'Enter' && this.checkInputValueCallback) {
      const inputValue = this.checkValue();

      enterButton?.classList.add('active');
      setTimeout(() => {
        enterButton?.classList.remove('active');
      }, 150);

      this.checkInputValueCallback(inputValue);
    } 
  };

  private checkValue(): string {
    const gameInput = document.querySelector('.css-editor__form__input') as HTMLInputElement;
    const inputValue = gameInput?.value.trim() as string;
    const isWinCondition = this.dataStorage.currentLevelData().winCondition.includes(inputValue);
    const completedLevelsCount = this.dataStorage.levelsData.filter((level) => level.isPassed).length;
    const isValueCompletedLevel = +inputValue <= completedLevelsCount;
    const inputSelection = (isWinCondition) ? 'win' : (isValueCompletedLevel) ? `goToLevel ${inputValue}` : 'wrong';

    if (inputValue) gameInput.value = '';

    return inputSelection;
  }
}