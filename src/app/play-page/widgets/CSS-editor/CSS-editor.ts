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
    const inputInfo = document.createElement('p');

    codeCssForm.className = 'CSS-editor__form';
    codeInput.className = 'CSS-editor__form__input';
    codeInput.type = 'text';
    codeInput.setAttribute('autofocus', 'autofocus');
    codeInput.placeholder = 'Type in a CSS selector';
    codeCssForm.append(codeInput);
    enterButton.className = 'CSS-editor__form__button';
    enterButton.innerHTML = 'Enter';
    codeCssForm.append(enterButton);
    inputInfo.className = 'CSS-editor__form__info';
    inputInfo.innerHTML = `{<br>/* Styles would go here. */<br>}<br><br>/*<br>
      Type a number to skip to a level.<br>Ex → "3" for level 3<br>*/`;
    codeCssForm.append(inputInfo);

    return codeCssForm;
  }
}