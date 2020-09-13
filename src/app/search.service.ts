import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, empty, of } from "rxjs";
import { Githubuser } from "./githubuser";
import { environment } from "../environments/environment";



@Injectable()
export class SearchService {
  public searchResults:any;
  private finaldata = []
  private apiUrl:string = "https://api.github.com/users"
  token = '?access_token=6f5eb4b27d5f1cc2dcb975cda191e7b47d48e6ce';
  constructor(private http:HttpClient) { }
  getData():Observable<Githubuser[]>{
     return this.http.get<Githubuser[]>(this.apiUrl)
  }
  getUser(login: string):Observable<Githubuser>{
    const url = `${this.apiUrl}/${login}`;
    return this.http.get<Githubuser>(url)
  }
  searchUsers(term:string):Observable<Githubuser[]>{
    if (!term.trim()){
      return of([])
    }
    return this.http.get<Githubuser[]>(`${this.apiUrl} + /?name=${term} + ${this.token}`)
  }


} 
