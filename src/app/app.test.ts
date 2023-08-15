import { App } from './app';
import { PlayPage } from './play-page/playPage';
import { ModeLoad } from './shared/types/enums';

jest.mock('./play-page/playPage');

describe('App', () => {
  let app: App;
  let playPageMock: PlayPage;

  beforeEach(() => {
    playPageMock = new PlayPage();
    app = new App();
    app['playPage'] = playPageMock;
  });

  it('calls drawGamePage with ModeLoad.start when start is called', () => {
    const drawGamePageMock = jest.fn();

    playPageMock.drawGamePage = drawGamePageMock;
    app.start();
    expect(playPageMock.drawGamePage).toHaveBeenCalledWith(ModeLoad.start);
  });
});