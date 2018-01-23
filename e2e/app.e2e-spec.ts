import { RaidoWebModulePage } from './app.po';

describe('raido-web-module App', () => {
  let page: RaidoWebModulePage;

  beforeEach(() => {
    page = new RaidoWebModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
