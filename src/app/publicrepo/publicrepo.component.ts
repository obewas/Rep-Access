import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";

@Component({
  selector: 'app-publicrepo',
  templateUrl: './publicrepo.component.html',
  styleUrls: ['./publicrepo.component.css']
})
export class PublicrepoComponent implements OnInit {
  public userdata = [];
  constructor(private SearchService:SearchService) { }

  ngOnInit() {
    this.SearchService.getData().subscribe((data)=>{
      this.userdata = Array.from(Object.keys(data),k=>data[k])
      console.log(this.userdata)
    })
  }

}
