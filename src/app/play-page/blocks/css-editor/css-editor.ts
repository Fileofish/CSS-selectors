import { IndexList } from '../../../shared/modules/indexList';
import { ModeLoad } from '../../../shared/types/enums';
import { Callback, doubleCallback } from '../../../shared/types/generics';
import { CssEditorEnter } from './features/buttons/cssEditorEnter';
import { CssEditorHelp } from './features/buttons/cssEditorHelp';
import { CssEditorInput } from './features/inputs/cssEditorInput';

export class CssEditor {
  private indexList = new IndexList();
  private cssEditorEnter = new CssEditorEnter();
  private cssEditorHelp = new CssEditorHelp();
  private cssEditorInput = new CssEditorInput();
  
  getCssEditor(drawGamePageCallback: Callback<ModeLoad>,
    controlAnswerCallback: doubleCallback<string, Callback<ModeLoad>>): DocumentFragment {
    const fragment = document.createDocumentFragment();
    const isDarkTheme = false;
    const indexList = this.indexList.createIndexList(isDarkTheme);
    const codeCssForm = this.createCodeForm(drawGamePageCallback, controlAnswerCallback);

    fragment.append(indexList, codeCssForm);

    return fragment;
  }

  private createCodeForm(drawGamePageCallback: Callback<ModeLoad>,
    controlAnswerCallback: doubleCallback<string, Callback<ModeLoad>>): HTMLDivElement {
    const codeCssDisplay = document.createElement('div');
    const cssDisplayWrapper = document.createElement('div');
    const inputInfo = document.createElement('p');
    const codeInput = this.cssEditorInput.getCodeInput();
    const enterButton = this.cssEditorEnter.getEnterButton(drawGamePageCallback, controlAnswerCallback);
    const helpButton = this.cssEditorHelp.getHelpButton();

    codeCssDisplay.className = 'css-editor__display';
    cssDisplayWrapper.className = 'css-editor__display__wrapper';
    codeCssDisplay.append(codeInput, enterButton, cssDisplayWrapper);
    inputInfo.className = 'css-editor__display__info';
    inputInfo.innerHTML = `{<br>/* Styles would go here. */<br>}<br><br>/*<br>
      Type a number to skip to a level.<br>Ex → "3" for level 3<br>*/`;
    cssDisplayWrapper.append(inputInfo, helpButton);

    return codeCssDisplay;
  }
}