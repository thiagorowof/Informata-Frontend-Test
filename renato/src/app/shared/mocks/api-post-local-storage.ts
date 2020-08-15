import { of } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { KEY_PRODUCT_DATA } from '../keys-local-storage';

export function API_POST_LOCAL_STORAGE(product: ProductModel): any {
  return of(localStorage.setItem(KEY_PRODUCT_DATA, JSON.stringify(product)));
}
