import { Component, OnInit } from '@angular/core';
import { FilterUtils } from 'primeng/utils';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  actualUser: string;

  cols: any[];
  yearTimeout: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.list();

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

  onYearChange(event, dt): void {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'year', 'gt');
    }, 150);
  }
}