import { WinCallback } from '../../shared/types/generics';
import { LevelData } from '../../shared/types/interfaces';
import { Cleaner } from './cleaner';

export class WinController{
  private cleaner: Cleaner;
  constructor() {
    this.cleaner = new Cleaner();
  }
  controlWin(levelsData: LevelData[], level: number, 
    isWinLevel: boolean, loadGamePage: WinCallback<string, LevelData, number>): void {
    const condition = (isWinLevel && level === levelsData.length - 1) ? 'win'
      : (isWinLevel) ? 'nextLevel' 
      : 'wrong';

    switch (condition) {
      case 'nextLevel':
        this.goNextLevel(levelsData, level, loadGamePage);
        break;
      case 'wrong':
        this.shakeScreen();
        break;
      case 'win':
        this.winGame(loadGamePage);
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

  private goNextLevel(levelsData: LevelData[], level: number,
    loadGamePage: WinCallback<string, LevelData, number>): void {
    const animatedObjects = document.querySelectorAll('.animation');

    animatedObjects.forEach((object) => {
      object.classList.add('fly');
      setTimeout(() => {
        object.classList.remove('fly');
      }, 450);
    });
    levelsData[level+1].isPassed = true;
    level++;
    setTimeout(() => {
      this.cleaner.cleanGameArea(true);
      loadGamePage('load', levelsData[level-1], level);
    }, 500);
  }

  private winGame(loadGamePage: WinCallback<string, LevelData, number>): void {
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
    loadGamePage('win');
  }
}