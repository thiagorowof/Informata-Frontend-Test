import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'https://us-central1-estudo-974fe.cloudfunctions.net/front_end';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Product[]>(this.URL);
  }
}
