import { LevelData } from '../../../shared/types/interfaces';

export class LevelList{
  getLevelList(levelsData: LevelData[]): DocumentFragment {
    const fragment = document.createDocumentFragment();

    levelsData.forEach((level, index) => {
      const levelNumber = index + 1;
      const levelRow = document.createElement('li');
      const levelNumberText = document.createElement('p');
      const iconTemplate = document.querySelector('.level-bar__icon') as HTMLTemplateElement;
      const iconClone = iconTemplate?.content.cloneNode(true) as Element;
      const iconElementClone = iconClone.firstElementChild as HTMLElement;

      if (level.isPassed) iconElementClone.classList.add('is-passed');
      levelRow.className = `level level__${levelNumber}`;
      levelNumberText.className = `level__num level__num-${levelNumber}`;
      levelNumberText.innerHTML = String(levelNumber);
      levelRow.append(iconClone);
      levelRow.append(levelNumberText);
      fragment.append(levelRow);
    });

    return fragment;
  }

  listenToHelp(callback: () => void) {
    const helpButton = document.querySelectorAll('.level-bar__help-button');

    helpButton?.forEach((element) => {
      element.addEventListener('click', () => {
        callback();
      });
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