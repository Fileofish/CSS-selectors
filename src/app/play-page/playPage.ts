import { Viewer } from './controllers/viewer';
import { Loader } from './controllers/loader';
import { Listener } from './controllers/listener';
import { LevelSelector } from './controllers/levelSelector';

export class PlayPage {
  private viewer: Viewer;
  private loader: Loader;
  private listener: Listener;
  private levelSelector: LevelSelector;
  constructor() {
    this.viewer = new Viewer();
    this.loader = new Loader();
    this.listener = new Listener();
    this.levelSelector = new LevelSelector();
  }
  drawGamePage = (mode: string): void => {
    switch (mode) {
      case 'start':
        this.loader.loadDataGame();
        this.listener.listenGamePage('start', this.drawGamePage);
        // falls through
      case 'load':
        this.viewer.viewGamePage(this.levelSelector.goToSelectedLevel, this.drawGamePage);
        this.listener.listenGamePage('load', this.drawGamePage);
        break;
      case 'win':
        this.viewer.viewLevelList(this.levelSelector.goToSelectedLevel, this.drawGamePage);
        this.viewer.viewWindowWin();
        this.listener.listenGamePage('win');
        break;
    }
  };
}