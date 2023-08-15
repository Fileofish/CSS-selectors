import { CssEditor } from './css-editor';

describe('CssEditor', () => {
  let cssEditor: CssEditor;
  let drawGamePageCallback: jest.Mock;
  let controlAnswerCallback: jest.Mock;
  let fragment: DocumentFragment;
  let codeCssForm: HTMLDivElement | null;
  let fakeElement: HTMLDivElement;

  beforeEach(() => {
    cssEditor = new CssEditor();
    drawGamePageCallback = jest.fn();
    controlAnswerCallback = jest.fn();
    fragment = cssEditor.getCssEditor(drawGamePageCallback, controlAnswerCallback);
    fakeElement = document.createElement('div');
    fakeElement.appendChild(fragment);
    document.body.appendChild(fakeElement);
    codeCssForm = fakeElement.querySelector('.css-editor__display');
  });

  afterEach(() => {
    document.body.removeChild(fakeElement);
  });

  it('should have correct classes and innerHTML for codeCssForm and its child elements', () => {
    const codeCssDisplay = codeCssForm?.querySelector('.css-editor__display__wrapper');
    const inputInfo = codeCssDisplay?.querySelector('.css-editor__display__info');

    expect(codeCssForm?.classList.contains('css-editor__display')).toBe(true);
    expect(codeCssDisplay).toBeTruthy();
    expect(inputInfo).toBeTruthy();
    expect(inputInfo?.innerHTML).toBe(`{<br>/* Styles would go here. */<br>}<br><br>/*<br>
      Type a number to skip to a level.<br>Ex → "3" for level 3<br>*/`);
  });
});