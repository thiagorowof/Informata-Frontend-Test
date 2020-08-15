import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CrudService } from '../../shared/crud.service';
import { API_POST_LOCAL_STORAGE } from '../../shared/mocks/api-post-local-storage';
import { ProductModel } from '../../shared/models/product.model';
import { API_URL } from '../../shared/url-api';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudService<ProductModel> {
  constructor(public http: HttpClient) {
    super(http, API_URL);
  }

  /** Opção para salvar os dados no Local Storage do navegador */
  // mockSave(product: ProductModel): Observable<ProductModel> {
  //   return this.http
  //     .post<ProductModel>(
  //       '../../shared/mocks/api.ts',
  //       API_POST_LOCAL_STORAGE(product)
  //     )
  //     .pipe(take(1));
  // }
}
