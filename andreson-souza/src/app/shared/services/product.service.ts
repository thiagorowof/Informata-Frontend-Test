import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'assets/customers-large.json';

  constructor(private httpClient: HttpClient) { }

  // getProducts() {
  //   return this.httpClient.get<any>(this.url)
  //   .toPromise()
  //   .then(res => res.data as Product[])
  //   .then(data => data);
  // }

  getProducts() {
    return this.httpClient.get<Product[]>(this.url);
  }

}
