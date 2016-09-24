import { AuthFirePage } from './app.po';

describe('auth-fire App', function() {
  let page: AuthFirePage;

  beforeEach(() => {
    page = new AuthFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
