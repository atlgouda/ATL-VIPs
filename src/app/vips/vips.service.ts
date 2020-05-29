import { Injectable } from '@angular/core';
import { Vip } from './vip';
// import { VIPS } from './mock-vips';
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VipService {
  private vipsUrl = 'api/vips';  // URL to web api
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(
    private http: HttpClient
    ) { }
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
  /** DELETE: delete the hero from the server */
  deleteVip (id: number): Observable<{}> {
    const url = `${this.vipsUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
  }

}
