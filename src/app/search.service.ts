import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable";
import { Injectable } from "@angular/core";
import { Githubuser } from "./githubuser";


@Injectable()
export class SearchService {
  private finaldata = []
  private apiUrl:string = "https://api.github.com/users"
  constructor(private http:HttpClient) { }
  getData():Observable<Githubuser[]>{
     return this.http.get<Githubuser[]>(this.apiUrl)
  }
}
