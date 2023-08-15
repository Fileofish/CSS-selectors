import { globalDataStorage } from '../../../../../shared/data/dataStorage';

export class CssEditorHelp {
  private dataStorage = globalDataStorage;

  getHelpButton(): HTMLButtonElement {
    const helpButton = document.createElement('button');

    helpButton.className = 'css-editor__display__button css-editor__display__button--help';
    helpButton.innerHTML = 'Help';
    this.listenToClick(helpButton);

    return helpButton;
  }

  cleanupListener(): void {
    const helpButton = document.querySelector('.css-editor__display__button--help');

    helpButton?.removeEventListener('click', this.getAnswer);
  }

  private listenToClick(helpButton: HTMLButtonElement): void {
    helpButton?.addEventListener('click', this.getAnswer);
  }

  private getAnswer = (): void => {
    const cssEditorInput = document.querySelector('.css-editor__display__input') as HTMLInputElement;
    const currentAnswer = this.dataStorage.currentLevelData().winCondition[0];

    cssEditorInput.value = '';
    currentAnswer.split('').forEach((symbol, index) => {
      setTimeout(() => cssEditorInput.value += symbol, 150 * (index + 1));
    });

    this.dataStorage.currentLevelData().isHint = true;
  };
}