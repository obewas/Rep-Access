import { Component, OnInit } from '@angular/core';
import { SearchService } from "../search.service";

@Component({
  selector: 'app-selfrepo',
  templateUrl: './selfrepo.component.html',
  styleUrls: ['./selfrepo.component.css']
})
export class SelfrepoComponent implements OnInit {

  constructor(private searchService:SearchService) {  }
   
  ngOnInit(): void {
  }

}
