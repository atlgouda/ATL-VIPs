import { Injectable } from '@angular/core';
import { Vip } from './vip';
import { VIPS } from './mock-vips';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VipService {

  constructor() { }
  getVips(): Observable<Vip[]> {
    return of(VIPS);
  }
}
