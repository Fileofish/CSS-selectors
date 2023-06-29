import levelsData from '../shared/data/level-data.json';
import { LevelData } from '../shared/types/interfaces';
import { EnterPresser } from './widgets/CSS-editor/features/enterPresser';
import { Highlighter } from './components/highlighter';
import { Viewer } from './components/viewer';
import { WinController } from './components/winController';
import { LevelList } from './widgets/level-bar/level-list';

export class PlayPage {
  private viewer: Viewer;
  private highlighter: Highlighter;
  private enterPresser: EnterPresser;
  private winController: WinController;
  private levelList: LevelList;
  private levelsData: LevelData[];
  private level: number;
  constructor() {
    this.viewer = new Viewer();
    this.highlighter = new Highlighter();
    this.enterPresser = new EnterPresser();
    this.winController = new WinController();
    this.levelList = new LevelList();
    this.levelsData = levelsData;
    this.level = 0;
  }
  loadGamePage = (isGameWin: string, levelData?: LevelData, level?: number): void => {
    if (levelData) this.levelsData[this.level] = levelData;

    if (level) this.level = level;
    
    switch (isGameWin) {
      case 'start':
        this.levelList.listenToHelp(this.checkHelpButton);
        // falls through
      case 'load':
        this.viewer.viewGameRoom(this.levelsData[this.level]);
        this.viewer.viewCssEditor();
        this.viewer.viewHtmlViewer(this.levelsData[this.level]);
        this.viewer.viewLevelList(this.levelsData);
        this.highlighter.listenTo();
        this.enterPresser.listenTo(this.levelsData[this.level], this.checkWinLevel);
        this.levelList.createHelpWindow(this.levelsData[this.level]);
        break;
      case 'win':
        this.viewer.viewLevelList(this.levelsData);
        this.highlighter.listenTo();
        this.viewer.viewModalWindowWin();
        break;
    }
  };
  private checkWinLevel = (isWinLevel: boolean): void => {
    this.winController.controlWin(this.levelsData, this.level, isWinLevel, this.loadGamePage);
  };
  private checkHelpButton = (): void => {
    this.viewer.viewModalWindowHelp();
  };
}