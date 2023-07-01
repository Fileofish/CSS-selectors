export class Cleaner{
  cleanGameArea(isNextLevel: boolean) {
    const gameRoomBlock = document.querySelector('.game-room__wrapper');
    const htmlViewerBlock = document.querySelector('.html-viewer');
    const levelList = document.querySelector('.level-bar__list');
    const cssEditor = document.querySelector('.css-editor');
    const winWindow = document.querySelector('.window-win');
    const isReloadGameArea = (isNextLevel && gameRoomBlock && htmlViewerBlock && levelList
      && cssEditor && winWindow);
    const isGoToWinGame = (!isNextLevel && gameRoomBlock && htmlViewerBlock && levelList && cssEditor);
    
    if (isReloadGameArea) {
      gameRoomBlock.innerHTML = htmlViewerBlock.innerHTML =
        levelList.innerHTML = cssEditor.innerHTML = winWindow.innerHTML = '';
      winWindow.classList.remove('win');
    }

    if (isGoToWinGame) {
      htmlViewerBlock.innerHTML = levelList.innerHTML = cssEditor.innerHTML = '';
    }
  }
}