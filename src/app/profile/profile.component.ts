import { Component, OnInit } from '@angular/core';
import { GithubService } from '../shared/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'user-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private githubAPI: GithubService) {}

  ngOnInit() {
    this.githubAPI.getUser().subscribe(user => console.log(user));
  }

}
