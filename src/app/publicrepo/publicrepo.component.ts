import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-publicrepo',
  templateUrl: './publicrepo.component.html',
  styleUrls: ['./publicrepo.component.css']
})
export class PublicrepoComponent implements OnInit {
  public userdata = [];
  constructor(private SearchService:SearchService) { }

  ngOnInit() {
    this.SearchService.getData().subscribe(data => 
      this.userdata = data)
      console.log(this.userdata)
    })
  }

}
