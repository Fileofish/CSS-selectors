import { Callback } from '../../shared/types/generics';
import { CssEditorFeatureAnalyzer } from '../blocks/css-editor/features/featureAnalyzer';
import { LevelBar } from '../blocks/level-bar/levelBar';
import { AnswerChecker } from './answerChecker';
import { Cleaner } from './cleaner';
import { Highlighter } from './highlighter';
import { Saver } from './saver';
import { Viewer } from './viewer';

export class Listener {
  private levelBar: LevelBar;
  private cleaner: Cleaner;
  private viewer: Viewer;
  private saver: Saver;
  private highlighter: Highlighter;
  private cssEditorFeatureAnalyzer: CssEditorFeatureAnalyzer;
  private answerChecker: AnswerChecker;
  private drawGamePageCallback: Callback<string> | null;
  constructor() {
    this.levelBar = new LevelBar();
    this.cleaner = new Cleaner();
    this.viewer = new Viewer();
    this.saver = new Saver();
    this.highlighter = new Highlighter();
    this.cssEditorFeatureAnalyzer = new CssEditorFeatureAnalyzer();
    this.answerChecker = new AnswerChecker();
    this.drawGamePageCallback = null;
  }
  listenGamePage(mode: string, drawGamePageCallback?: Callback<string>) {
    if (drawGamePageCallback) this.drawGamePageCallback = drawGamePageCallback;

    switch (mode) {
      case('start'):
        this.levelBar.listenToDescription(this.viewer.toggleWindowDescription);
        this.levelBar.listenToResetButton(this.resetGame);
        this.levelBar.listenToBurgerButton();
        this.saver.listenToAutoSave();
        break;
      case('load'):
        this.highlighter.listenToHighLight();
        this.cssEditorFeatureAnalyzer.listenToEnter(this.checkInputValue);
        this.cssEditorFeatureAnalyzer.listenToHelp();
        break;
      case('win'):
        this.highlighter.listenToHighLight();
        break;
    }
  }

  private resetGame = (): void => {
    this.cleaner.cleanGameArea(true);

    if (this.drawGamePageCallback) this.drawGamePageCallback('load');
  };

  private checkInputValue = (inputValue: string): void => {
    if (this.drawGamePageCallback) this.answerChecker.controlAnswer(inputValue, this.drawGamePageCallback);
  };
}