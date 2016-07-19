import { Component } from '@angular/core';
import { GithubService } from '../shared/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'user-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {
  user;
  repos;

  constructor(private githubAPI: GithubService) {
    this.githubAPI.getUser().subscribe(user => this.user = user);
    this.githubAPI.getRepos().subscribe(repos => this.repos = repos);
  }

}
