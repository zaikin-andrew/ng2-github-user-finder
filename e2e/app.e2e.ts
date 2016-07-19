import { GithubUserFinderPage } from './app.po';

describe('github-user-finder App', function() {
  let page: GithubUserFinderPage;

  beforeEach(() => {
    page = new GithubUserFinderPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('github-user-finder works!');
  });
});
