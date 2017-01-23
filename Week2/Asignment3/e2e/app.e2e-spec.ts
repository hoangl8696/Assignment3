import { Asignment3Page } from './app.po';

describe('asignment3 App', function() {
  let page: Asignment3Page;

  beforeEach(() => {
    page = new Asignment3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
