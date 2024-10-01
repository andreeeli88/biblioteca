import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpVariable: HttpClient) { }
  private api_admin = "http://localhost:3000/login";

  postLogin(user: JSON): Observable<any> {
    return this.httpVariable.post(this.api_admin, user )
  }
}
