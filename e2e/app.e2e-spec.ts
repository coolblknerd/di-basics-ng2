import { DiBasicsPage } from './app.po';

describe('di-basics App', function() {
  let page: DiBasicsPage;

  beforeEach(() => {
    page = new DiBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
