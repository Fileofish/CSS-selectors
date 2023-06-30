import { Callback } from '../../../../shared/types/generics';
import { CssEditorEnter } from './buttons/cssEditorEnter';
import { CssEditorHelp } from './buttons/cssEditorHelp';

export class CssEditorFeatureAnalyzer {
  private cssEditorEnter: CssEditorEnter;
  private cssEditorHelp: CssEditorHelp;
  constructor() {
    this.cssEditorEnter = new CssEditorEnter();
    this.cssEditorHelp = new CssEditorHelp();
  }

  listenToEnter(checkWinLevelCallback: Callback<boolean>): void {
    this.cssEditorEnter.cleanupListeners(checkWinLevelCallback);
    this.cssEditorEnter.pushEnterKey();
    this.cssEditorEnter.listenClickEnterButton();
  }

  listenToHelp(): void {
    this.cssEditorHelp.cleanupListener();
    this.cssEditorHelp.clickHelpButton();
  }
}