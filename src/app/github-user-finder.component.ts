import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { GithubService } from './shared/github.service';

import { ProfileComponent } from './profile/profile.component';

@Component({
  moduleId: module.id,
  selector: 'github-user-finder-app',
  templateUrl: 'github-user-finder.component.html',
  styleUrls: ['github-user-finder.component.css'],
  directives: [ProfileComponent],
  providers: [HTTP_PROVIDERS, GithubService]
})
export class GithubUserFinderAppComponent {
  projectName: String = 'Github user finder';
}
