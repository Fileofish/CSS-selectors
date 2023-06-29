import levelsData from '../shared/data/level-data.json';
import { LevelData, SaveData } from '../shared/types/interfaces';
import { EnterPresser } from './widgets/CSS-editor/features/enterPresser';
import { Highlighter } from './components/highlighter';
import { Viewer } from './components/viewer';
import { WinController } from './components/winController';
import { LevelList } from './widgets/level-bar/level-list';
import { Cleaner } from './components/cleaner';
import { Loader } from './components/loader';

export class PlayPage {
  private viewer: Viewer;
  private highlighter: Highlighter;
  private enterPresser: EnterPresser;
  private winController: WinController;
  private levelList: LevelList;
  private cleaner: Cleaner;
  private loader: Loader;
  private levelsData: LevelData[];
  private level: number;
  constructor() {
    this.viewer = new Viewer();
    this.highlighter = new Highlighter();
    this.enterPresser = new EnterPresser();
    this.winController = new WinController();
    this.levelList = new LevelList();
    this.cleaner = new Cleaner();
    this.loader = new Loader();
    this.levelsData = levelsData;
    this.level = 0;
  }
  loadGamePage = (isGameWin: string, levelData?: LevelData, level?: number,): void => {
    if (levelData) this.levelsData[this.level] = levelData;

    if (level === 0 || level) this.level = level;

    switch (isGameWin) {
      case 'start':
        this.levelList.listenToHelp(this.checkHelpButton);
        this.levelList.listenToResetButton(this.resetGame);
        this.listenToAutoSave();
        this.loader.loadDataGame(this.getSaveData);
        // falls through
      case 'load':
        this.viewer.viewGameRoom(this.levelsData[this.level]);
        this.viewer.viewCssEditor();
        this.viewer.viewHtmlViewer(this.levelsData[this.level]);
        this.viewer.viewLevelList(this.levelsData, this.processSelectedLevel, this.level);
        this.highlighter.listenTo();
        this.enterPresser.listenTo(this.levelsData[this.level], this.checkWinLevel);
        this.levelList.createHelpWindow(this.levelsData[this.level]);
        break;
      case 'win':
        this.viewer.viewLevelList(this.levelsData, this.processSelectedLevel);
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

  private resetGame = (): void => {
    this.level = 0;
    this.levelsData.forEach((level, index) => {
      if (index) level.isPassed = false;
    });
    this.cleaner.cleanGameArea(true);
    this.loadGamePage('load');
  };
  
  private processSelectedLevel = (level: number) => {
    this.cleaner.cleanGameArea(true);
    this.loadGamePage('load', undefined, level);
  };

  private listenToAutoSave(): void {
    window.onbeforeunload = () => {
      const saveData: SaveData = {
        currentLevel: this.level,
        isPassedLevels: [],
      };

      this.levelsData.forEach((levelNum) => {
        saveData.isPassedLevels.push(levelNum.isPassed);
      });

      localStorage.setItem('CSSPrankstersData', JSON.stringify(saveData));
    };
  }

  private getSaveData = (saveData: SaveData): void => {
    this.level = saveData.currentLevel;
    saveData.isPassedLevels.forEach((saveLevel, index) => {
      this.levelsData[index].isPassed = saveLevel;
    });
  };
}