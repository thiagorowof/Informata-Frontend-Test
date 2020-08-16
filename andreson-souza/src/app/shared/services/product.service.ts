import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'assets/customers-large.json';

  constructor(private httpClient: HttpClient) { }

  getProducts(): any {
    return this.httpClient.get<any>(this.url)
    .toPromise()
    .then(res => res.data as Product[])
    .then(data => data);
  }

}
