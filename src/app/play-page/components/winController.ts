import { WinCallback } from '../../shared/types/generics';
import { LevelData } from '../../shared/types/interfaces';

export class WinController{
  controlWin(levelsData: LevelData[], level: number, 
    isWinLevel: boolean, loadGamePage: WinCallback<string, LevelData, number>): void {
    const condition = (isWinLevel && level === levelsData.length - 1) ? 'win'
      : (isWinLevel) ? 'nextLevel' 
      : 'wrong';

    switch (condition) {
      case 'nextLevel':
        this.goNextLevel(levelsData[level], level, loadGamePage);
        break;
      case 'wrong':
        this.shakeScreen();
        break;
      case 'win':
        this.winGame(levelsData[level], loadGamePage);
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

  private goNextLevel(levelData: LevelData, level: number,
    loadGamePage: WinCallback<string, LevelData, number>): void {
    const animatedObjects = document.querySelectorAll('.animation');

    animatedObjects.forEach((object) => {
      object.classList.add('fly');
      setTimeout(() => {
        object.classList.remove('fly');
      }, 450);
    });
    levelData.isPassed = true;
    level++;
    setTimeout(() => {
      this.cleanGameArea(true);
      loadGamePage('load', levelData, level);
    }, 500);
  }

  private winGame(levelData: LevelData, loadGamePage: WinCallback<string, LevelData, number>): void {
    const animatedObjects = document.querySelectorAll('.animation');
    const roomObjects = document.querySelectorAll('.css-room__obj');
    const happyObjects = ['I love you!😍', '...', `You're the best!🥳`, 'Nevermind...😒', 
      `I'm a chair.`, `Let's do it again!😉`, 'Everyone has demons inside.😈'];

    animatedObjects.forEach((object) => {
      object.classList.add('fly');
    });
    levelData.isPassed = true;
    roomObjects.forEach((object, index) => {
      object.setAttribute('data-title', happyObjects[index]);
    });
    this.cleanGameArea(false);
    loadGamePage('win', levelData);
  }

  private cleanGameArea(isNextLevel: boolean) {
    const gameRoomTemplate = document.querySelector('.game-room__template');
    const htmlViewerTemplate = document.querySelector('.HTML-viewer');
    const levelList = document.querySelector('.level-bar__list');
    const cssEditor = document.querySelector('.CSS-editor');
    const isGoToNextLevel = (isNextLevel && gameRoomTemplate && htmlViewerTemplate && levelList && cssEditor);
    const isGoToWinGame = (!isNextLevel && gameRoomTemplate && htmlViewerTemplate && levelList && cssEditor);
    
    if (isGoToNextLevel) {
      gameRoomTemplate.innerHTML = '';
      htmlViewerTemplate.innerHTML = '';
      levelList.innerHTML = '';
      cssEditor.innerHTML = '';
    }

    if (isGoToWinGame) {
      htmlViewerTemplate.innerHTML = '';
      levelList.innerHTML = '';
      cssEditor.innerHTML = '';
    }
  }
}