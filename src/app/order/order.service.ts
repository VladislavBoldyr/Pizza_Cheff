import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface Order {
  name: string;
  address: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  public placeAnOrder(order: Order): Observable<string> {
    return of('success');
  }
}
