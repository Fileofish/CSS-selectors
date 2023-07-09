import { globalDataStorage } from '../../shared/data/dataStorage';
import { AnswerMode, ModeLoad } from '../../shared/types/enums';
import { Callback } from '../../shared/types/generics';
import { LevelSelector } from './levelSelector';

export class LevelController{
  private dataStorage = globalDataStorage;
  private levelSelector = new LevelSelector();

  controlAnswer = (inputValue: string, drawGamePage: Callback<ModeLoad>): void => {
    const commandInputValue = inputValue.split(' ');
    let numSelectedLevel = 0;
    
    if (commandInputValue[1]) {
      numSelectedLevel = +commandInputValue[1];
    }

    const condition = (commandInputValue[0] === 'win'
        && this.dataStorage.currentLevel === this.dataStorage.levelsData.length - 1) ? AnswerMode.win :
      (commandInputValue[0] === 'win') ? AnswerMode.nextLevel :
      (commandInputValue[0] === 'goToLevel' && numSelectedLevel) ? AnswerMode.goToLevel :
      AnswerMode.wrong;

    switch (condition) {
      case AnswerMode.nextLevel:
        this.goNextLevel(drawGamePage);
        break;
      case AnswerMode.wrong:
        this.shakeScreen();
        break;
      case AnswerMode.win:
        this.winGame(drawGamePage);
        break;
      case AnswerMode.goToLevel:
        this.levelSelector.goToSelectedLevel(numSelectedLevel - 1, drawGamePage);
        break;
    }
  };
  
  private shakeScreen(): void {
    const displayCode = document.querySelector('.code-wrapper');

    displayCode?.classList.add('shake');
    setTimeout(() => {
      displayCode?.classList.remove('shake');
    }, 200);
  }

  private goNextLevel(drawGamePage: Callback<ModeLoad>): void {
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
      drawGamePage(ModeLoad.load);
    }, 500);
  }

  private winGame(drawGamePage: Callback<ModeLoad>): void {
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
    drawGamePage(ModeLoad.win);
  }
}