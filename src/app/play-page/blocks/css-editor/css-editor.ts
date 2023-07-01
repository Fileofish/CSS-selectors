import { IndexList } from '../../../shared/modules/indexList';

export class CssEditor {
  private indexList: IndexList;
  constructor() {
    this.indexList = new IndexList();
  }
  
  getCssEditor(): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const indexList = this.indexList.createIndexList(false);
    const codeCssForm = this.createCodeForm();

    fragment.append(indexList);
    fragment.append(codeCssForm);

    return fragment;
  }

  private createCodeForm(): HTMLDivElement {
    const codeCssForm = document.createElement('div');
    const codeInput = document.createElement('input');
    const enterButton = document.createElement('button');
    const cssFormWrapper = document.createElement('div');
    const inputInfo = document.createElement('p');
    const helpButton = document.createElement('button');

    codeCssForm.className = 'css-editor__form';
    codeInput.className = 'css-editor__form__input active';
    codeInput.type = 'text';
    codeInput.setAttribute('autofocus', 'autofocus');
    codeInput.placeholder = 'Type in a CSS selector';
    codeCssForm.append(codeInput);
    enterButton.className = 'css-editor__form__button css-editor__form__button--enter';
    enterButton.innerHTML = 'Enter';
    codeCssForm.append(enterButton);
    cssFormWrapper.className = 'css-editor__form__wrapper';
    codeCssForm.append(cssFormWrapper);
    inputInfo.className = 'css-editor__form__info';
    inputInfo.innerHTML = `{<br>/* Styles would go here. */<br>}<br><br>/*<br>
      Type a number to skip to a level.<br>Ex → "3" for level 3<br>*/`;
    cssFormWrapper.append(inputInfo);
    helpButton.className = 'css-editor__form__button css-editor__form__button--help';
    helpButton.innerHTML = 'Help';
    cssFormWrapper.append(helpButton);
    codeInput.oninput = () => {
      if (codeInput.value === '') {
        codeInput.classList.add('active');
      } else {
        codeInput.classList.remove('active');
      }
    };

    return codeCssForm;
  }
}