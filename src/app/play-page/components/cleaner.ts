import { LevelList } from '../widgets/level-bar/level-list';

export class Cleaner{
  private levelList: LevelList;
  constructor() {
    this.levelList = new LevelList();
  }
  cleanGameArea(isNextLevel: boolean) {
    const gameRoomTemplate = document.querySelector('.game-room__template');
    const htmlViewerTemplate = document.querySelector('.HTML-viewer');
    const levelList = document.querySelector('.level-bar__list');
    const cssEditor = document.querySelector('.CSS-editor');
    const winWindow = document.querySelector('.modal-window');
    const isGoToNextLevel = (isNextLevel && gameRoomTemplate && htmlViewerTemplate && levelList
      && cssEditor && winWindow);
    const isGoToWinGame = (!isNextLevel && gameRoomTemplate && htmlViewerTemplate && levelList && cssEditor);
    
    // this.levelList.cleanSelectListener();

    if (isGoToNextLevel) {
      gameRoomTemplate.innerHTML = '';
      htmlViewerTemplate.innerHTML = '';
      levelList.innerHTML = '';
      cssEditor.innerHTML = '';
      winWindow.innerHTML = '';
    }

    if (isGoToWinGame) {
      htmlViewerTemplate.innerHTML = '';
      levelList.innerHTML = '';
      cssEditor.innerHTML = '';
    }
  }
}