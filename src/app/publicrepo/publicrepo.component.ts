import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';
import {Repository} from '../repository';


@Component({
  selector: 'app-publicrepo',
  templateUrl: './publicrepo.component.html',
    providers: [SearchService],
  styleUrls: ['./publicrepo.component.css']
})
export class PublicrepoComponent implements OnInit {

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
