import { DataStorage, globalDataStorage } from '../../../../../shared/data/dataStorage';

export class CssEditorHelp {
  private dataStorage: DataStorage;
  constructor() {
    this.dataStorage = globalDataStorage;
  }

  cleanupListener(): void {
    const helpButton = document.querySelector('.css-editor__form__button--help');

    helpButton?.removeEventListener('click', this.getAnswer);
  }

  clickHelpButton(): void {
    const helpButton = document.querySelector('.css-editor__form__button--help');

    helpButton?.addEventListener('click', this.getAnswer);
  }

  private getAnswer = (): void => {
    const cssEditorInput = document.querySelector('.css-editor__form__input') as HTMLInputElement;
    const currentAnswer = this.dataStorage.currentLevelData().winCondition[0];

    currentAnswer.split('').forEach((symbol, index) => {
      setTimeout(() => cssEditorInput.value += symbol, 150 * (index + 1));
    });

    this.dataStorage.currentLevelData().isHint = true;
  };
}