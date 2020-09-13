import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, empty, of } from "rxjs";
import { Githubuser } from "./githubuser";
import { environment } from "../environments/environment";
import { map } from "rxjs/operators";


@Injectable()
export class SearchService {
  
  private finaldata = []
  private apiUrl:string = "https://api.github.com/users"
  private token = environment.API_token
  constructor(private http:HttpClient) { }

  getData():Observable<Githubuser[]>{
     return this.http.get<Githubuser[]>(this.apiUrl)
  }
  getUser(query: string):Observable<Githubuser>{
    const url = `${this.apiUrl}?q=${query}&key=${this.token}`;
    return this.http.get<Githubuser>(url)
    .pipe(
      map((Response: any)=>Response.items)
    )
  }
  searchUsers(term:string):Observable<Githubuser[]>{
    if (!term.trim()){
      return of([])
    }
    return this.http.get<Githubuser[]>(`${this.apiUrl} + /?name=${term} + ${this.token}`)
  }


} 
