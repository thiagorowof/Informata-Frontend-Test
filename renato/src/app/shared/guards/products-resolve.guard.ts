import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { of, Observable } from 'rxjs';

import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductService } from '../../main/services/product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverGuard implements Resolve<ProductModel> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductModel> {
    if (route.params && route.params['id']) {
      return this.productService.loadById(route.params['id']);
    }

    return of({
      codigoErp: null,
      apresentacao: null,
      nomeComercial: null,
      nomeComercialComApresentacao: null,
      unidadeMedidaAnvisa: null,
      codigoBarrasPrincipal: null,
    });
  }
}
