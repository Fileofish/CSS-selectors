import { DataStorage, globalDataStorage } from '../../../shared/data/dataStorage';
import { Callback, SelectLevelCallback } from '../../../shared/types/generics';

export class LevelBar{
  private dataStorage: DataStorage;
  private goToSelectedLevelCallback: SelectLevelCallback<number, Callback<string>> | null;
  private drawGamePageCallback: Callback<string> | null;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.goToSelectedLevelCallback = null;
    this.drawGamePageCallback = null;
  }

  getLevelList(goToSelectedLevelCallback: SelectLevelCallback<number, Callback<string>>,
    drawGamePageCallback: Callback<string>): DocumentFragment {
    const fragment = document.createDocumentFragment();

    this.goToSelectedLevelCallback = goToSelectedLevelCallback;
    this.drawGamePageCallback = drawGamePageCallback;
    this.dataStorage.levelsData.forEach((level, index) => {
      const levelNumber = index + 1;
      const levelRow = document.createElement('li');
      const levelNumberText = document.createElement('p');
      const iconTemplate = document.querySelector('.level-bar__icon') as HTMLTemplateElement;
      const iconClone = iconTemplate?.content.cloneNode(true) as Element;
      const isCurrentLevel = (index === this.dataStorage.currentLevel);

      levelRow.className = `level level!${levelNumber}!`;
      levelNumberText.className = `level__num level__num!${levelNumber}!`;

      if (level.isPassed || isCurrentLevel) {
        levelRow.classList.add('active');
        this.listenPassedLevel(levelRow);
      }

      if (level.isHint) {
        levelRow.classList.add('hint');
      }

      if (isCurrentLevel) levelRow.classList.add('current');
      levelNumberText.innerHTML = `
        ${levelNumber} <span class="level-name num!${levelNumber}!">- ${this.dataStorage.levelsData[index].hint}</span>
      `;
      levelRow.append(iconClone);
      levelRow.append(levelNumberText);
      fragment.append(levelRow);
    });

    return fragment;
  }

  private listenPassedLevel(levelRow: Element): void {
    levelRow.addEventListener('click', this.selectLevel as EventListener);
  }

  cleanPassedLevelsListener(): void {
    const levelList = document.querySelector('.level-bar__list');
    const passedLevels = levelList?.querySelectorAll('.active');

    passedLevels?.forEach((passedLevel) => {
      passedLevel.removeEventListener('click', this.selectLevel as EventListener);
    });
  }

  private selectLevel = (event: MouseEvent): void => {
    const target = event.target as Element;
    const nameTag = target.tagName;
    const isNotSvg = (nameTag !== 'svg');
    const isNotSvgPath = (nameTag !== 'path');
    
    if (isNotSvgPath && isNotSvg && this.goToSelectedLevelCallback && this.drawGamePageCallback) {
      const selectedLevel: number = +target.className.split('!')[1] - 1;

      this.goToSelectedLevelCallback(selectedLevel, this.drawGamePageCallback);
    }
  };

  listenToDescription(toggleWindowDescriptionCallback: () => void): void {
    const descriptionButton = document.querySelectorAll('.level-bar__description-button') ;

    descriptionButton?.forEach((element) => {
      element.addEventListener('click', () => {
        toggleWindowDescriptionCallback();
      });
    });
  }

  listenToResetButton(resetGameCallback: () => void): void {
    const resetButton = document.querySelector('.reset-button');
    
    resetButton?.addEventListener('click', () => {
      this.dataStorage.currentLevel = 0;
      this.dataStorage.levelsData.forEach((level, index) => {
        if (index) level.isPassed = false;
        level.isHint = false;
      });
      resetGameCallback();
    });
  }

  listenToBurgerButton(): void {
    const burgerButton = document.querySelector('.level-bar__burger-button');
    const levelBar = document.querySelector('.level-bar');
    const levelBarTitle = document.querySelector('.level-bar__title');
    
    burgerButton?.addEventListener('click', () => {
      burgerButton?.classList.toggle('active');
      levelBar?.classList.toggle('active');
      levelBarTitle?.classList.toggle('off');
    });
  }
  
  createDescriptionWindow(): void {
    const windowDescriptionTitle = document.querySelector('.window-description__title');
    const windowDescriptionHint = document.querySelector('.window-description__hint');
    const windowDescriptionDescription = document.querySelector('.window-description__description');
    const isElements = (windowDescriptionTitle && windowDescriptionHint && windowDescriptionDescription);

    if (isElements) {
      windowDescriptionTitle.innerHTML = this.dataStorage.currentLevelData().header;
      windowDescriptionHint.innerHTML = this.dataStorage.currentLevelData().hint;
      windowDescriptionDescription.innerHTML = this.dataStorage.currentLevelData().description;
    }
  }
}