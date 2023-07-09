export class WindowWin{
  getWindowWin(): HTMLDivElement {
    const windowWinElement = document.createElement('div');
    const winTitle = document.createElement('h2');
    const winContent = document.createElement('p');

    windowWinElement.className = 'window-win__wrapper';
    winTitle.className = 'window-win__title';
    winTitle.innerHTML = 'Congratulations!';
    winContent.className = 'window-win__text';
    winContent.innerHTML = `You are the best!<br>You can choose the completed level or reset the progress!`;
    windowWinElement.append(winTitle, winContent);

    return windowWinElement;
  }
}