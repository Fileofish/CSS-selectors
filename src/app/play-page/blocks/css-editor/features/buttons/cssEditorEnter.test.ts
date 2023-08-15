import { CssEditorEnter } from './cssEditorEnter';

describe('cssEditorEnter', () => {
  let cssEditorEnter: CssEditorEnter;
  let drawGamePageCallback: jest.Mock;
  let controlAnswerCallback: jest.Mock;
  let enterButton: HTMLButtonElement;

  beforeEach(() => {
    cssEditorEnter = new CssEditorEnter();
    drawGamePageCallback = jest.fn();
    controlAnswerCallback = jest.fn();
    enterButton = cssEditorEnter.getEnterButton(drawGamePageCallback, controlAnswerCallback);
    document.body.appendChild(enterButton);
  });

  afterEach(() => {
    document.body.removeChild(enterButton);
  });

  it('should create a help button with class and innerHTML', () => {
    expect(enterButton.className).toBe('css-editor__display__button css-editor__display__button--enter');
    expect(enterButton.innerHTML).toBe('Enter');
  });

  it('should call controlAnswerCallback when enter button is clicked', () => {
    enterButton.click();
    expect(controlAnswerCallback).toHaveBeenCalled();
  });

  it('should call controlAnswerCallback and add "active" when Enter key is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });

    document.dispatchEvent(event);
    expect(controlAnswerCallback).toHaveBeenCalled();
    expect(enterButton.classList.contains('active')).toBe(true);
  });

  it('should not call controlAnswerCallback when key other than Enter is pressed', () => {
    const event = new KeyboardEvent('keydown', { key: 'Tab' });

    document.dispatchEvent(event);
    expect(controlAnswerCallback).not.toHaveBeenCalled();
  });

  it('should remove "active" class from enter button when Enter key is released', () => {
    const keydownEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    const keyupEvent = new KeyboardEvent('keyup', { key: 'Enter' });

    document.dispatchEvent(keydownEvent);
    document.dispatchEvent(keyupEvent);
    expect(enterButton.classList.contains('active')).toBe(false);
  });

  it('should remove click event listener when cleanupListener is called', () => {
    const eventClickSpy = jest.spyOn(enterButton, 'removeEventListener');
    const keyDownEventSpy = jest.spyOn(document, 'removeEventListener');
    const keyUpEventSpy = jest.spyOn(document, 'removeEventListener');

    cssEditorEnter.cleanupListeners();
    expect(eventClickSpy).toHaveBeenCalledWith('click', expect.any(Function));
    expect(keyDownEventSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    expect(keyUpEventSpy).toHaveBeenCalledWith('keyup', expect.any(Function));
  });
});