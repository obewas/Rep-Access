import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from "../search.service";
import {  Githubuser } from '../githubuser'

@Component({
  selector: 'app-selfrepo',
  templateUrl: './selfrepo.component.html',
  styleUrls: ['./selfrepo.component.css']
})

export class SelfrepoComponent implements OnInit {
  @Input() githubuser: Githubuser
  constructor(private searchService:SearchService) {  }
   
  ngOnInit(): void {
  }

}
