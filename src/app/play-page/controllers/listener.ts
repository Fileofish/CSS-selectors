import { ModeLoad } from '../../shared/types/enums';
import { Callback } from '../../shared/types/generics';
import { LevelBar } from '../blocks/level-bar/levelBar';
import { Highlighter } from './highlighter';
import { Saver } from './saver';
import { Viewer } from './viewer';

export class Listener {
  private levelBar = new LevelBar();
  private viewer = new Viewer();
  private saver = new Saver();
  private highlighter = new Highlighter();
  private drawGamePageCallback: Callback<ModeLoad> | null = null;

  listenGamePage(mode: ModeLoad, drawGamePageCallback?: Callback<ModeLoad>): void {
    if (drawGamePageCallback) this.drawGamePageCallback = drawGamePageCallback;

    switch (mode) {
      case(ModeLoad.start):
        this.levelBar.listenToDescription(this.viewer.toggleWindowDescription);
        this.levelBar.listenToResetButton(this.resetGame);
        this.levelBar.listenToBurgerButton();
        this.saver.listenToAutoSave();
        break;
      case(ModeLoad.load):
      case(ModeLoad.win):
        this.highlighter.listenToHighLight();
        break;
    }
  }

  private resetGame = (): void => {
    this.drawGamePageCallback?.(ModeLoad.load);
  };
}