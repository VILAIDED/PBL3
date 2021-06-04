import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  private cartUrl = 'api/cart';

  addToCart(idCom: number): Observable<any>
  {
    const url = `${this.cartUrl}/${idCom}`;
    return this.http.get(url);
  }

  getCart(): Observable<Item[]>
  {
    return this.http.get<Item[]>(this.cartUrl);
  }

  updateCart(idCom:number,plus:boolean,remove:boolean): Observable<any>
  {
    const url = `${this.cartUrl}/${idCom}/?plus=${plus}&remove=${remove}`;
    return this.http.put(url,this.httpOptions);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
