import { Callback, SelectLevelCallback } from '../../shared/types/generics';
import { CssEditor } from '../blocks/css-editor/css-editor';
import { HtmlViewer } from '../blocks/html-viewer/htmlViewer';
import { CssRoom } from '../blocks/css-room/css-room';
import { LevelBar } from '../blocks/level-bar/levelBar';
import { WindowWin } from '../blocks/window-win/windowWin';

export class Viewer {
  private cssRoom: CssRoom;
  private cssEditor: CssEditor;
  private htmlViewer: HtmlViewer;
  private levelBar: LevelBar;
  private windowWin: WindowWin;
  constructor() {
    this.cssRoom = new CssRoom();
    this.cssEditor = new CssEditor();
    this.htmlViewer = new HtmlViewer();
    this.levelBar = new LevelBar();
    this.windowWin = new WindowWin();
  }

  viewGamePage(goToSelectedLevelCallback: SelectLevelCallback<number, Callback<string>>,
    drawGamePageCallback: Callback<string>): void {
    this.viewCssRoom();
    this.viewCssEditor();
    this.viewHtmlViewer();
    this.viewLevelList(goToSelectedLevelCallback, drawGamePageCallback);
    this.levelBar.createDescriptionWindow();
  }

  private viewCssRoom(): void {
    const gameRoomBlock = document.querySelector('.game-room__wrapper');
    const gameRoomFragment = this.cssRoom.getCssRoom();

    gameRoomBlock?.append(gameRoomFragment);
  }

  private viewCssEditor(): void {
    const cssEditorBlock = document.querySelector('.css-editor');
    const cssEditorFragment = this.cssEditor.getCssEditor();

    cssEditorBlock?.append(cssEditorFragment);

    const codeInput = document.querySelector('.css-editor__form__input') as HTMLInputElement;

    codeInput?.focus();
  }

  private viewHtmlViewer(): void {
    const htmlViewerBlock = document.querySelector('.html-viewer');
    const htmlViewerFragment = this.htmlViewer.getHtmlViewer();

    htmlViewerBlock?.append(htmlViewerFragment);
  }

  viewLevelList(goToSelectedLevelCallback: SelectLevelCallback<number, Callback<string>>,
    drawGamePageCallback: Callback<string>): void {
    const levelListElement = document.querySelector('.level-bar__list');
    const levelListFragment = this.levelBar.getLevelList(goToSelectedLevelCallback, drawGamePageCallback);

    levelListElement?.append(levelListFragment);
  }

  viewWindowWin = (): void => {
    const windowWin = document.querySelector('.window-win');
    const windowWinFragment = this.windowWin.getWindowWin();

    windowWin?.classList.add('win');
    windowWin?.append(windowWinFragment);
  };

  toggleWindowDescription(): void {
    const windowDescription = document.querySelector('.window-description');
    const windowDescriptionWrapper = document.querySelector('.window-description__wrapper');
    const descriptionButton = document.querySelector('.level-bar__description-button');

    windowDescription?.classList.toggle('active');
    windowDescriptionWrapper?.classList.toggle('active');
    descriptionButton?.classList.toggle('active');
  }
}