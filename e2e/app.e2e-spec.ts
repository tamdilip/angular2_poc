import { Todos2Page } from './app.po';

describe('todos2 App', () => {
  let page: Todos2Page;

  beforeEach(() => {
    page = new Todos2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
