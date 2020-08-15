import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng/utils';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  actualUser: string;
  selectedProduct: ProductModel;

  cols: any[];
  yearTimeout: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.refresh();

    this.cols = [
      { field: 'codigoErp', header: 'Código ERP' },
      { field: 'apresentacao', header: 'Apresentação' },
      { field: 'nomeComercial', header: 'Nome Comercial' },
      {
        field: 'nomeComercialComApresentacao',
        header: 'Nome Comercial Apresentação',
      },
      { field: 'unidadeMedidaAnvisa', header: 'Unidade Medida Anvisa' },
      { field: 'codigoBarrasPrincipal', header: 'Código de Barras' },
    ];

    FilterUtils['custom'] = (value, filter): boolean => {
      if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
      }

      if (value === undefined || value === null) {
        return false;
      }

      return parseInt(filter) > value;
    };
  }

  refresh(): void {
    this.products$ = this.productService.list();
  }

  onYearChange(event, dt): void {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 150);
  }

  update(product: ProductModel): void {
    this.router.navigate(['products/update-product', product.id]);
  }

  remove(product: ProductModel): void {
    this.productService.delete(product.id).subscribe((success) => {
      this.refresh();
    });
  }
}
