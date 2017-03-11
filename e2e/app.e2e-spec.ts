import { NgTest01Page } from './app.po';

describe('ng-test01 App', () => {
  let page: NgTest01Page;

  beforeEach(() => {
    page = new NgTest01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
