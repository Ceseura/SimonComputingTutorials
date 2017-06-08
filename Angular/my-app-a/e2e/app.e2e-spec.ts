import { MyAppPage } from './app.po';

describe('my-app App', () => {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });

  it('should have browser title');
  it('should display corporate logo');
  it('should have a link to the home page');
});
