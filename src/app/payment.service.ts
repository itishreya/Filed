import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  
  private httpOptions = {
    headers: new HttpHeaders({
    "Content-Type":  "application/json",
    "Authorization": "my-auth-token",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":"PUT, POST, GET, DELETE, PATCH, OPTIONS",
    "upgrade-isecure-requests":"0"
    })};

  baseURL: string = 'http://localhost:3000/';

  constructor( private http: HttpClient) { }

  getPeople(): Observable<Card[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Card[]>(this.baseURL + 'people', this.httpOptions)
  }

  addCard(card: Card): Observable<any> {
    const body=JSON.stringify(card);
    console.log(body);
  	return this.http.post<Card>(this.baseURL + 'people', body, this.httpOptions);
  }
}
