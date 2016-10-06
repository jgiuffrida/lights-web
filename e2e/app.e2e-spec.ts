import { LightsPage } from './app.po';

describe('lights App', function() {
  let page: LightsPage;

  beforeEach(() => {
    page = new LightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
