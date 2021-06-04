import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  private billUrl = 'http://localhost:5000/api/bill';

  private setHeader(){
    const token = "Bearer " + localStorage.getItem("JWT");
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', token);
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }

  addBill(bill: Bill , json : string): Observable<Bill> {
    return this.http.post<Bill>(this.billUrl, {bill,json}, {headers : this.setHeader()});
  }

  getBill(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.billUrl,{headers : this.setHeader()});
  }
}
