import { PlayPage } from './play-page/playPage';
import { ModeLoad } from './shared/types/enums';

export class App {
  private playPage = new PlayPage();

  start(): void {
    this.playPage.drawGamePage(ModeLoad.start);
  }
}