import { Callback } from '../../../shared/types/generics';
import { LevelData } from '../../../shared/types/interfaces';

export class LevelList{
  private selectLevelCallback: Callback<number> | null;
  constructor() {
    this.selectLevelCallback = null;
  }

  getLevelList(levelsData: LevelData[], callback: Callback<number>, currentLevel?: number): DocumentFragment {
    const fragment = document.createDocumentFragment();

    this.selectLevelCallback = callback;
    levelsData.forEach((level, index) => {
      const levelNumber = index + 1;
      const levelRow = document.createElement('li');
      const levelNumberText = document.createElement('p');
      const iconTemplate = document.querySelector('.level-bar__icon') as HTMLTemplateElement;
      const iconClone = iconTemplate?.content.cloneNode(true) as Element;
      const isCurrentLevel = (index === currentLevel);

      levelRow.className = `level level!${levelNumber}!`;
      levelNumberText.className = `level__num level__num!${levelNumber}!`;

      if (level.isPassed || isCurrentLevel) {
        levelRow.classList.add('active');
        this.listenPassedLevel(levelRow);
      }

      if (isCurrentLevel) levelRow.classList.add('current');
      levelNumberText.innerHTML = String(levelNumber);
      levelRow.append(iconClone);
      levelRow.append(levelNumberText);
      fragment.append(levelRow);
    });

    return fragment;
  }

  listenPassedLevel(levelRow: Element) {
    levelRow.addEventListener('click', this.selectLevel as EventListener);
  }

  cleanPassedLevelsListener() {
    const levelList = document.querySelector('.level-bar__list');
    const passedLevels = levelList?.querySelectorAll('.active');

    passedLevels?.forEach((passedLevel) => {
      passedLevel.removeEventListener('click', this.selectLevel as EventListener);
    });
  }

  private selectLevel = (event: MouseEvent): void => {
    const target = event.target as Element;
    const nameTag = target.tagName;
    const isNotSvgPath = (nameTag !== 'path');
    
    if (isNotSvgPath && this.selectLevelCallback) {
      const targetElementClass = +target.className.split('!')[1] - 1;

      this.selectLevelCallback(targetElementClass);
    }
  };

  listenToHelp(callback: () => void) {
    const helpButton = document.querySelectorAll('.level-bar__help-button') ;

    helpButton?.forEach((element) => {
      element.addEventListener('click', () => {
        callback();
      });
    });
  }

  listenToResetButton(callback: () => void) {
    const resetButton = document.querySelector('.reset-button');
    
    resetButton?.addEventListener('click', () => {
      callback();
    });
  }
  
  createHelpWindow(LevelData: LevelData): void {
    const windowHelpTitle = document.querySelector('.window-help__title');
    const windowHelpHint = document.querySelector('.window-help__hint');
    const windowHelpDescription = document.querySelector('.window-help__description');
    const isElements = (windowHelpTitle && windowHelpHint && windowHelpDescription);

    if (isElements) {
      windowHelpTitle.innerHTML = LevelData.header;
      windowHelpHint.innerHTML = LevelData.hint;
      windowHelpDescription.innerHTML = LevelData.description;
    }
  }
}