import { Injectable } from '@angular/core';
import { Vip } from './vip';
// import { VIPS } from './mock-vips';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VipService {
  private vipsUrl = 'api/vips';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }
  getVips(): Observable<Vip[]> {
    return this.http.get<Vip[]>(this.vipsUrl);
  }
  getVip(id: number): Observable<Vip> {
    const url = `${this.vipsUrl}/${id}`;
    return this.http.get<Vip>(url);
  }
  /** POST: add a new vip to the server */
  addVip(vip: Vip): Observable<Vip> {
    return this.http.post<Vip>(this.vipsUrl, vip, this.httpOptions)
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
/**
 * Handle Http operation that failed.
 * Let the app continue.

 */
