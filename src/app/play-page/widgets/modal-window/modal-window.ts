export class ModalWindow{
  getModalWindowWin() {
    const fragment = document.createDocumentFragment();

    const modalWindowWin = this.createWindowWin();

    fragment.append(modalWindowWin);

    return fragment;
  }

  private createWindowWin(): HTMLDivElement {
    const modalWindowWin = document.createElement('div');
    const winTitle = document.createElement('h2');
    const winContent = document.createElement('p');

    modalWindowWin.className = 'modal-window__wrapper';
    winTitle.className = 'modal-window__title';
    winContent.className = 'modal-window__text';
    winTitle.innerHTML = 'Congratulations!';
    winContent.innerHTML = `You are the best!<br>You can choose the completed level or reset the progress!`;
    modalWindowWin.append(winTitle);
    modalWindowWin.append(winContent);

    return modalWindowWin;
  }
}