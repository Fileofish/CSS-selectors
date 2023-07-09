import { Viewer } from './controllers/viewer';
import { Loader } from './controllers/loader';
import { Listener } from './controllers/listener';
import { LevelSelector } from './controllers/levelSelector';
import { ModeLoad } from '../shared/types/enums';
import { LevelController } from './controllers/levelController';
import { Cleaner } from './controllers/cleaner';

export class PlayPage {
  private viewer = new Viewer();
  private loader = new Loader();
  private listener = new Listener();
  private levelSelector = new LevelSelector();
  private levelController = new LevelController();
  private cleaner = new Cleaner();

  drawGamePage = (mode: ModeLoad): void => {
    switch (mode) {
      case ModeLoad.start:
        this.initGame();
        // falls through
      case ModeLoad.load:
        this.loadLevel();
        break;
      case ModeLoad.win:
        this.winGame();
    }
  };

  private initGame() {
    this.loader.loadDataGame();
    this.listener.listenGamePage(ModeLoad.start, this.drawGamePage);
  }

  private loadLevel() {
    const isWin = false;

    this.cleaner.cleanGameArea(isWin);
    this.viewer.viewGamePage( this.drawGamePage, this.levelSelector.goToSelectedLevel,
      this.levelController.controlAnswer);
    this.listener.listenGamePage(ModeLoad.load, this.drawGamePage);
  }

  private winGame() {
    const isWin = true;

    this.cleaner.cleanGameArea(isWin);
    this.viewer.viewLevelList(this.levelSelector.goToSelectedLevel, this.drawGamePage);
    this.viewer.viewWindowWin();
    this.listener.listenGamePage(ModeLoad.win);
  }
}