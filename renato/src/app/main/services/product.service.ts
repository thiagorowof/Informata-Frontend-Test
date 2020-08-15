import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { ProductModel } from '../../shared/models/product.model';
import { API_URL } from '../../shared/url-api';
import { API_POST_LOCAL_STORAGE } from '../../shared/mocks/api-post-local-storage';
import { Observable, BehaviorSubject } from 'rxjs';
import { take, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<ProductModel> {
  constructor(public http: HttpClient) {
    super(http, API_URL);
  }

  mockSave(product: ProductModel): Observable<ProductModel> {
    return this.http
      .post<ProductModel>(
        '../../shared/mocks/api.ts',
        API_POST_LOCAL_STORAGE(product)
      )
      .pipe(take(1));
  }
}
