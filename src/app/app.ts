import { PlayPage } from './play-page/play-page';

export class App {
  private playPage: PlayPage;

  constructor() {
    this.playPage = new PlayPage();
  }

  start(): void {
    this.playPage.loadGamePage('start');
  }
}