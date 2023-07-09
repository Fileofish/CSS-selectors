import { Callback, doubleCallback } from '../../shared/types/generics';
import { CssEditor } from '../blocks/css-editor/css-editor';
import { HtmlViewer } from '../blocks/html-viewer/htmlViewer';
import { CssRoom } from '../blocks/css-room/css-room';
import { LevelBar } from '../blocks/level-bar/levelBar';
import { WindowWin } from '../blocks/window-win/windowWin';
import { ModeLoad } from '../../shared/types/enums';

export class Viewer {
  private cssRoom = new CssRoom();
  private cssEditor = new CssEditor();
  private htmlViewer = new HtmlViewer();
  private levelBar = new LevelBar();
  private windowWin = new WindowWin();

  viewGamePage(drawGamePageCallback: Callback<ModeLoad>,
    goToSelectedLevelCallback: doubleCallback<number, Callback<ModeLoad>>,
    controlAnswerCallback: doubleCallback<string, Callback<ModeLoad>>): void {
    this.viewCssRoom();
    this.viewCssEditor(drawGamePageCallback, controlAnswerCallback);
    this.viewHtmlViewer();
    this.viewLevelList(goToSelectedLevelCallback, drawGamePageCallback);
  }

  private viewCssRoom(): void {
    const gameRoomBlock = document.querySelector('.game-room__wrapper');
    const pictureLoader = document.querySelector('.picture-loader');
    const gameRoomFragment = this.cssRoom.getCssRoom();
    const cloneGameRoomFragment = this.cssRoom.getCssRoom();

    gameRoomBlock?.append(gameRoomFragment);
    pictureLoader?.append(cloneGameRoomFragment);
  }

  private viewCssEditor(drawGamePageCallback: Callback<ModeLoad>,
    controlAnswerCallback: doubleCallback<string, Callback<ModeLoad>>): void {
    const cssEditorBlock = document.querySelector('.css-editor');
    const cssEditorFragment = this.cssEditor.getCssEditor(drawGamePageCallback, controlAnswerCallback);
    const codeInput = document.querySelector('.css-editor__display__input') as HTMLInputElement;

    cssEditorBlock?.append(cssEditorFragment);
    codeInput?.focus();
  }

  private viewHtmlViewer(): void {
    const htmlViewerBlock = document.querySelector('.html-viewer');
    const htmlViewerFragment = this.htmlViewer.getHtmlViewer();

    htmlViewerBlock?.append(htmlViewerFragment);
  }

  viewLevelList(goToSelectedLevelCallback: doubleCallback<number, Callback<ModeLoad>>,
    drawGamePageCallback: Callback<ModeLoad>): void {
    const levelListElement = document.querySelector('.level-bar__list');
    const levelListFragment = this.levelBar.getLevelList(goToSelectedLevelCallback, drawGamePageCallback);

    levelListElement?.append(levelListFragment);
    this.levelBar.createDescriptionWindow();
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