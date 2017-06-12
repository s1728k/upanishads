import { UpanishadsPage } from './app.po';

describe('upanishads App', () => {
  let page: UpanishadsPage;

  beforeEach(() => {
    page = new UpanishadsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
