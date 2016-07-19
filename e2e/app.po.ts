export class GithubUserFinderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('github-user-finder-app h1')).getText();
  }
}
