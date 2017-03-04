import { XliffEditorPage } from './app.po';

describe('xliff-editor App', function() {
  let page: XliffEditorPage;

  beforeEach(() => {
    page = new XliffEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
