import { CssEditorEnter } from '../blocks/css-editor/features/buttons/cssEditorEnter';
import { CssEditorHelp } from '../blocks/css-editor/features/buttons/cssEditorHelp';

export class Cleaner{
  private cssEditorHelp = new CssEditorHelp();
  private cssEditorEnter = new CssEditorEnter();

  cleanGameArea(isWin: boolean): void {
    const gameRoomBlock = document.querySelector('.game-room__wrapper');
    const htmlViewerBlock = document.querySelector('.html-viewer');
    const levelList = document.querySelector('.level-bar__list');
    const cssEditor = document.querySelector('.css-editor');
    const winWindow = document.querySelector('.window-win');
    const pictureLoader = document.querySelector('.picture-loader');
    const isElements = (gameRoomBlock && htmlViewerBlock && levelList && cssEditor && winWindow && pictureLoader);
    const isReloadGameArea = (!isWin && isElements);
    const isGoToWinGame = (isWin && isElements);
    
    if (isReloadGameArea) {
      this.cssEditorHelp.cleanupListener();
      this.cssEditorEnter.cleanupListeners();
      gameRoomBlock.innerHTML = htmlViewerBlock.innerHTML =
        levelList.innerHTML = cssEditor.innerHTML = winWindow.innerHTML = pictureLoader.innerHTML = '';
      winWindow.classList.remove('win');
    }

    if (isGoToWinGame) {
      htmlViewerBlock.innerHTML = levelList.innerHTML = cssEditor.innerHTML = '';
    }
  }
}