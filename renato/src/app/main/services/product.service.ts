import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/crud.service';
import { ProductModel } from '../../shared/models/product.model';
import { URL_API } from '../../shared/url-api';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<ProductModel> {

  constructor(public http: HttpClient) {
    super(http, URL_API);
  }
}
