import { globalDataStorage } from '../../../../../shared/data/dataStorage';
import { ModeLoad } from '../../../../../shared/types/enums';
import { Callback, doubleCallback } from '../../../../../shared/types/generics';

export class CssEditorEnter {
  private dataStorage = globalDataStorage;
  private drawGamePageCallback: (Callback<ModeLoad> | null) = null;
  private controlAnswerCallback: (doubleCallback<string, Callback<ModeLoad>> | null) = null;

  getEnterButton(drawGamePageCallback: Callback<ModeLoad>,
    controlAnswerCallback: doubleCallback<string, Callback<ModeLoad>>): HTMLButtonElement {
    const enterButton = document.createElement('button');

    this.drawGamePageCallback = drawGamePageCallback;
    this.controlAnswerCallback = controlAnswerCallback;
    enterButton.className = 'css-editor__display__button css-editor__display__button--enter';
    enterButton.innerHTML = 'Enter';
    this.listenClickEnterButton(enterButton);
    this.listenPushEnterKey();

    return enterButton;
  }

  cleanupListeners(): void {
    const enterButton = document.querySelector('.css-editor__display__button--enter');
    
    document.removeEventListener('keydown', this.keydownListener);
    document.removeEventListener('keyup', this.keyupListener);
    enterButton?.removeEventListener('click', this.clickListener);
  }

  private listenPushEnterKey() {
    document.addEventListener('keydown', this.keydownListener);
    document.addEventListener('keyup', this.keyupListener);
  }

  private listenClickEnterButton(enterButton: HTMLButtonElement) {
    enterButton?.addEventListener('click', this.clickListener);
  }

  private clickListener = (): void => {
    if (this.drawGamePageCallback && this.controlAnswerCallback) {
      const inputValue = this.getCheckedValue();

      this.controlAnswerCallback(inputValue, this.drawGamePageCallback);
    }
  };

  private keydownListener = (event: KeyboardEvent): void => {
    const enterButton = document.querySelector('.css-editor__display__button--enter');

    if (event.key === 'Enter' && this.drawGamePageCallback && this.controlAnswerCallback) {
      const inputValue = this.getCheckedValue();

      enterButton?.classList.add('active');
      this.controlAnswerCallback(inputValue, this.drawGamePageCallback);
    }
  };

  private keyupListener(event: KeyboardEvent) {
    const enterButton = document.querySelector('.css-editor__display__button--enter');

    if (event.key === 'Enter') enterButton?.classList.remove('active');
  }

  private getCheckedValue(): string {
    const gameInput = document.querySelector('.css-editor__display__input') as HTMLInputElement;
    const inputValue = gameInput?.value.trim() as string;
    const isWinCondition = this.dataStorage.currentLevelData().winCondition.includes(inputValue);
    const completedLevelsCount = this.dataStorage.levelsData.filter((level) => level.isPassed).length;
    const isValueCompletedLevel = +inputValue <= completedLevelsCount;
    const inputSelection = (isWinCondition) ? 'win' : (isValueCompletedLevel) ? `goToLevel ${inputValue}` : 'wrong';

    if (inputValue) gameInput.value = '';

    return inputSelection;
  }
}