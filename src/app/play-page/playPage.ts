import { Viewer } from './controllers/viewer';
import { Cleaner } from './controllers/cleaner';
import { Loader } from './controllers/loader';
import { Listener } from './controllers/listener';
import { DataStorage, globalDataStorage } from '../shared/data/dataStorage';

export class PlayPage {
  private dataStorage: DataStorage;
  private viewer: Viewer;
  private cleaner: Cleaner;
  private loader: Loader;
  private listener: Listener;
  constructor() {
    this.dataStorage = globalDataStorage;
    this.viewer = new Viewer();
    this.cleaner = new Cleaner();
    this.loader = new Loader();
    this.listener = new Listener();
  }
  drawGamePage = (mode: string): void => {
    switch (mode) {
      case 'start':
        this.loader.loadDataGame();
        this.listener.listenGamePage('start', this.drawGamePage);
        // falls through
      case 'load':
        this.viewer.viewGamePage(this.goToSelectedLevel);
        this.listener.listenGamePage('load', this.drawGamePage);
        break;
      case 'win':
        this.viewer.viewLevelList(this.goToSelectedLevel);
        this.viewer.viewWindowWin();
        this.listener.listenGamePage('win');
        break;
    }
  };

  private goToSelectedLevel = (selectedLevel: number): void => {
    this.dataStorage.currentLevel = selectedLevel;
    this.cleaner.cleanGameArea(true);
    this.drawGamePage('load');
  };
}