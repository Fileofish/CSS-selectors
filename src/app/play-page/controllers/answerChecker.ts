import { DataStorage, globalDataStorage } from '../../shared/data/dataStorage';
import { Callback } from '../../shared/types/generics';
import { Cleaner } from './cleaner';
import { LevelSelector } from './levelSelector';

export class AnswerChecker{
  private dataStorage: DataStorage;
  private cleaner: Cleaner;
  private levelSelector: LevelSelector;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.cleaner = new Cleaner();
    this.levelSelector = new LevelSelector();
  }

  controlAnswer(inputValue: string, drawGamePage: Callback<string>): void {
    const commandInputValue = inputValue.split(' ');
    let numSelectedLevel = 0;

    if (commandInputValue[1]) {
      numSelectedLevel = +commandInputValue[1];
    }

    const condition = (commandInputValue[0] === 'win'
      && this.dataStorage.currentLevel === this.dataStorage.levelsData.length - 1) ? 'win'
      : (commandInputValue[0] === 'win') ? 'nextLevel'
      : (commandInputValue[0] === 'goToLevel' && numSelectedLevel) ? 'goToLevel'
      : 'wrong';

    switch (condition) {
      case 'nextLevel':
        this.goNextLevel(drawGamePage);
        break;
      case 'wrong':
        this.shakeScreen();
        break;
      case 'win':
        this.winGame(drawGamePage);
        break;
      case 'goToLevel':
        this.levelSelector.goToSelectedLevel(numSelectedLevel - 1, drawGamePage);
        break;
    }
  }
  
  private shakeScreen(): void {
    const displayCode = document.querySelector('.code-wrapper');

    displayCode?.classList.add('shake');
    setTimeout(() => {
      displayCode?.classList.remove('shake');
    }, 200);
  }

  private goNextLevel(drawGamePage: Callback<string>): void {
    const animatedObjects = document.querySelectorAll('.animation');

    animatedObjects.forEach((object) => {
      object.classList.add('fly');
      setTimeout(() => {
        object.classList.remove('fly');
      }, 450);
    });
    this.dataStorage.levelsData[this.dataStorage.currentLevel + 1].isPassed = true;
    this.dataStorage.currentLevel++;
    setTimeout(() => {
      this.cleaner.cleanGameArea(true);
      drawGamePage('load');
    }, 500);
  }

  private winGame(drawGamePage: Callback<string>): void {
    const animatedObjects = document.querySelectorAll('.animation');
    const roomObjects = document.querySelectorAll('.css-room__obj');
    const happyObjects = ['I love you!😍', '...', `You're the best!🥳`, 'Nevermind...😒', 
      `I'm a chair.`, `Let's do it again!😉`, 'Everyone has demons inside.😈'];

    animatedObjects.forEach((object) => {
      object.classList.add('fly');
    });
    roomObjects.forEach((object, index) => {
      object.setAttribute('data-title', happyObjects[index]);
    });
    this.cleaner.cleanGameArea(false);
    drawGamePage('win');
  }
}