import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../model/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  private accountUrl = 'http://localhost:5000/api/account';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  login(account: Account): Observable<any> {
    const credentials = JSON.stringify(account);
    return this.http.post(this.accountUrl + '/login', credentials, this.httpOptions);
  }

  register(account: Account): Observable<any> {
    return this.http.post(this.accountUrl + '/register', account, this.httpOptions);
  }

}
