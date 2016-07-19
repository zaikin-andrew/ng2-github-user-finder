import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GithubUserFinderAppComponent } from '../app/github-user-finder.component';

beforeEachProviders(() => [GithubUserFinderAppComponent]);

describe('App: GithubUserFinder', () => {
  it('should create the app',
      inject([GithubUserFinderAppComponent], (app: GithubUserFinderAppComponent) => {
    expect(app).toBeTruthy();
  }));

});
