import { Callback } from '../../shared/types/generics';
import { LevelData } from '../../shared/types/interfaces';
import { CssEditor } from '../widgets/CSS-editor/CSS-editor';
import { HtmlViewer } from '../widgets/HTML-viewer/HTML-viewer';
import { CssRoom } from '../widgets/game-room/game-room';
import { LevelList } from '../widgets/level-bar/level-list';
import { ModalWindow } from '../widgets/modal-window/modal-window';

export class Viewer {
  private cssRoom: CssRoom;
  private cssEditor: CssEditor;
  private htmlViewer: HtmlViewer;
  private levelList: LevelList;
  private modalWindow: ModalWindow;
  constructor() {
    this.cssRoom = new CssRoom();
    this.cssEditor = new CssEditor();
    this.htmlViewer = new HtmlViewer();
    this.levelList = new LevelList();
    this.modalWindow = new ModalWindow();
  }
  viewGameRoom(levelData: LevelData): void {
    const gameRoomElement = document.querySelector('.game-room__template');
    const gameRoomFragment = this.cssRoom.getCssRoom(levelData);

    gameRoomElement?.append(gameRoomFragment);
  }
  viewCssEditor(): void {
    const cssEditorElement = document.querySelector('.CSS-editor');
    const cssEditorFragment = this.cssEditor.getCssEditor();

    cssEditorElement?.append(cssEditorFragment);
  }
  viewHtmlViewer(levelData: LevelData): void {
    const htmlViewerElement = document.querySelector('.HTML-viewer');
    const htmlViewerFragment = this.htmlViewer.getHtmlViewer(levelData);

    htmlViewerElement?.append(htmlViewerFragment);
  }
  viewLevelList(levelsData: LevelData[], callback: Callback<number>, level?: number): void {
    const levelListElement = document.querySelector('.level-bar__list');
    const levelListFragment = this.levelList.getLevelList(levelsData, callback, level);

    levelListElement?.append(levelListFragment);
  }
  viewModalWindowWin(): void {
    const modalWindowElement = document.querySelector('.modal-window');
    const modalWindowFragment = this.modalWindow.getModalWindowWin();

    modalWindowElement?.classList.add('win');
    modalWindowElement?.append(modalWindowFragment);
  }
  viewModalWindowHelp(): void {
    const windowHelp = document.querySelector('.window-help');
    const windowHelpWrapper = document.querySelector('.window-help__wrapper');
    const helpButton = document.querySelector('.level-bar__help-button');

    windowHelp?.classList.toggle('active');
    windowHelpWrapper?.classList.toggle('active');
    helpButton?.classList.toggle('active');
  }
}