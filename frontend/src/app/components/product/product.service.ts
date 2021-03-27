import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "https://us-central1-estudo-974fe.cloudfunctions.net/front_end"

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
