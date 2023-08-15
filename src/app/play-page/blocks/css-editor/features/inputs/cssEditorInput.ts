export class CssEditorInput{
  getCodeInput(): HTMLInputElement {
    const codeInput = document.createElement('input');

    codeInput.className = 'css-editor__display__input active';
    codeInput.type = 'text';
    codeInput.setAttribute('autofocus', 'autofocus');
    codeInput.placeholder = 'Type in a CSS selector';
    codeInput.oninput = () => {
      if (codeInput.value === '') {
        codeInput.classList.add('active');
      } else {
        codeInput.classList.remove('active');
      }
    };
    
    return codeInput;
  }
}