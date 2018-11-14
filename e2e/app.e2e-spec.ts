import { TpPage } from './app.po';

describe('tp App', function() {
  let page: TpPage;

  beforeEach(() => {
    page = new TpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
