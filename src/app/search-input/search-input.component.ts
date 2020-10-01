import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Repository} from '../repository';
import {Githubuser} from '../githubuser';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    providers: [SearchService],
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
    public searchMe = 'obewas';
    public githubUser: string;

    users: Githubuser ;
    repository: Repository;
    public searchRepo: string;
    public resultCount = 12;


    findUser(username) {
        this.githubUser = '';
        this.searchMe  = username;
        this.ngOnInit();
    }


  constructor(public githubUserRequest: SearchService, public userRepos: SearchService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.gitUserRepos(this.searchMe);
      console.log(this.userRepos);
  }


    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;

    }
}

