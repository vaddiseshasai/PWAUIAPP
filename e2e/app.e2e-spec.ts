import { PwaPage } from './app.po';

describe('pwa App', () => {
  let page: PwaPage;

  beforeEach(() => {
    page = new PwaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
