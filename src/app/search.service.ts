import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, empty } from "rxjs";
import { Githubuser } from "./githubuser";


@Injectable()
export class SearchService {
  public searchResults:any;
  private finaldata = []
  private apiUrl:string = "https://api.github.com/users"
  constructor(private http:HttpClient) { }
  getData():Observable<Githubuser[]>{
     return this.http.get<Githubuser[]>(this.apiUrl)
  }
  getUser(login: string):Observable<Githubuser>{
    const url = `${this.apiUrl}/${login}`;
    return this.http.get<Githubuser>(url)
  }
    


} 
