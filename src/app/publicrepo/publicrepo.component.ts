import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-publicrepo',
  templateUrl: './publicrepo.component.html',
  styleUrls: ['./publicrepo.component.css']
})
export class PublicrepoComponent implements OnInit {
  searchTerm: string;
  @Output() searchEmmiter = new EventEmitter<any>();

  constructor() {
  }

  emmitUser() {
  this.searchEmmiter.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}