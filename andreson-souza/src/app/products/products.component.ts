import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  cols: any[];

  constructor(
    private productService: ProductService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().then(products => this.products = products);

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'codigoErp', header: 'Código ERP' },
      { field: 'apresentacao', header: 'Apresentação' },
      { field: 'nomeComercial', header: 'Nome Comercial' },
      { field: 'nomeComercialComApresentacao', header: 'Nome Comercial com Apresentação' },
      { field: 'unidadeMedidaAnvisa', header: 'Unidade Medida Anvisa' },
      { field: 'codigoBarrasPrincipal', header: 'Código Barras Principal' },
    ];


  }

}
