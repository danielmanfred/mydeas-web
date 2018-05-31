import { MydeasPage } from './app.po';

describe('mydeas App', function() {
  let page: MydeasPage;

  beforeEach(() => {
    page = new MydeasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
