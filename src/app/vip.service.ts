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
  constructor(private http: HttpClient) { }
  getVips(): Observable<Vip[]> {
    return this.http.get<Vip[]>(this.vipsUrl);
  }
  getVip(id: number): Observable<Vip> {
    const url = `${this.vipsUrl}/${id}`;
    return this.http.get<Vip>(url);
  }
}
