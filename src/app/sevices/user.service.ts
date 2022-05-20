import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  parentURL = 'https://11270452-4760-4f5c-8d09-fece07c7a482.mock.pstmn.io/';
  constructor(public http: HttpClient) { }

  getUsers(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let url = this.parentURL + 'users'
    return this.http.get<any[]>(url, httpOptions);
  }
}
