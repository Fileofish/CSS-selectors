import { WindowWin } from './windowWin';

describe('WindowWin', () => {
  let windowWin: WindowWin;
  let windowWinElement: HTMLDivElement;

  beforeEach(() => {
    windowWin = new WindowWin();
    windowWinElement = windowWin.getWindowWin();
    document.body.appendChild(windowWinElement);
  });

  afterEach(() => {
    document.body.removeChild(windowWinElement);
  });

  it('should have correct classes and innerHTML for windowWin and its child elements', () => {
    const winTitle = windowWinElement.querySelector('.window-win__title');
    const winContent = windowWinElement.querySelector('.window-win__text');

    expect(windowWinElement.className).toBe('window-win__wrapper');
    expect(winTitle).toBeTruthy();
    expect(winTitle?.innerHTML).toBe('Congratulations!');
    expect(winContent).toBeTruthy();
    expect(winContent?.innerHTML)
      .toBe(`You are the best!<br>You can choose the completed level or reset the progress!`);
  });
});