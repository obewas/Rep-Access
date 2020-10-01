import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Repository} from '../repository';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
    public resultCount = 12;

    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    constructor(public gitRepoRequest: SearchService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo);

      }


}
