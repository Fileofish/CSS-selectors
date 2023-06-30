export class WindowWin{
  getWindowWin() {
    const fragment = document.createDocumentFragment();

    const windowWin = this.createWindowWin();

    fragment.append(windowWin);

    return fragment;
  }

  private createWindowWin(): HTMLDivElement {
    const modalWindowWin = document.createElement('div');
    const winTitle = document.createElement('h2');
    const winContent = document.createElement('p');

    modalWindowWin.className = 'window-win__wrapper';
    winTitle.className = 'window-win__title';
    winContent.className = 'window-win__text';
    winTitle.innerHTML = 'Congratulations!';
    winContent.innerHTML = `You are the best!<br>You can choose the completed level or reset the progress!`;
    modalWindowWin.append(winTitle);
    modalWindowWin.append(winContent);

    return modalWindowWin;
  }
}