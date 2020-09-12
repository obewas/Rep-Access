import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, empty, observable, of } from "rxjs";
import { Githubuser } from "./githubuser";
import { catchError, map, tap } from "rxjs/operators";


@Injectable()
export class SearchService {
  private handleError:any
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
    
  
