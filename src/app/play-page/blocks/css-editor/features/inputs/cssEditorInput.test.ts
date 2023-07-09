import { CssEditorInput } from './cssEditorInput';

describe('cssEditorInput', () => {
  let cssEditorInput: CssEditorInput;
  let codeInput: HTMLInputElement;

  beforeEach(() => {
    cssEditorInput = new CssEditorInput();
    codeInput = cssEditorInput.getCodeInput();
    document.body.appendChild(codeInput);
  });

  afterEach(() => {
    document.body.removeChild(codeInput);
  });

  it('should create a code input with class, type, placeholder and attribute "autofocus"', () => {
    expect(codeInput.className).toBe('css-editor__display__input active');
    expect(codeInput.type).toBe('text');
    expect(codeInput.placeholder).toBe('Type in a CSS selector');
    expect(codeInput.getAttribute('autofocus')).toBe('autofocus');
  });

  it('should add active class when input is empty', () => {
    codeInput.value = '';
    codeInput.dispatchEvent(new Event('input'));
    expect(codeInput.classList.contains('active')).toBe(true);
  });

  it('should add active class when input is not empty', () => {
    codeInput.value = 'some value';
    codeInput.dispatchEvent(new Event('input'));
    expect(codeInput.classList.contains('active')).toBe(false);
  });
});