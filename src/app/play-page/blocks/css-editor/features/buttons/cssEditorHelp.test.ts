import { CssEditorHelp } from './cssEditorHelp';

describe('CssEditorHelp', () => {
  let cssEditorHelp: CssEditorHelp;
  let helpButton: HTMLButtonElement;

  beforeEach(() => {
    cssEditorHelp = new CssEditorHelp();
    helpButton = cssEditorHelp.getHelpButton();
    document.body.appendChild(helpButton);
  });

  afterEach(() => {
    document.body.removeChild(helpButton);
  });

  it('should create a help button with class and innerHTML', () => {
    expect(helpButton.className).toBe('css-editor__display__button css-editor__display__button--help');
    expect(helpButton.innerHTML).toBe('Help');
  });

  it('should remove click event listener when cleanupListener is called', () => {
    const eventSpy = jest.spyOn(helpButton, 'removeEventListener');

    cssEditorHelp.cleanupListener();
    expect(eventSpy).toHaveBeenCalledWith('click', expect.any(Function));
  });
});