import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]

  cols: any[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'codigoErp', header: 'Código Erp' },
      { field: 'apresentacao', header: 'Apresentação' },
      { field: 'nomeComercial', header: 'Nome Comercial' },
      { field: 'nomeComercialComApresentacao', header: 'Nome Com. com Apres.' },
      { field: 'unidadeMedidaAnvisa', header: 'Un. de Medida Anvisa' },
      { field: 'codigoBarrasPrincipal', header: 'Cód. Barras Princ.' }
    ];
  }

}
