import { PlayPage } from './play-page/playPage';

export class App {
  private playPage: PlayPage;
  constructor() {
    this.playPage = new PlayPage();
  }

  start(): void {
    this.playPage.drawGamePage('start');
  }
}