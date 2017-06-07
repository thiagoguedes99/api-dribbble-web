import { ApiDribbbleWebPage } from './app.po';

describe('api-dribbble-web App', () => {
  let page: ApiDribbbleWebPage;

  beforeEach(() => {
    page = new ApiDribbbleWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
