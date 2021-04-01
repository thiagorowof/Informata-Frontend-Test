import { User } from './../../auth/user.model';
import { HeaderService } from './../header/header.service';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  jsonCurrentUser: any
  currentUser: User
  products: Product[]

  cols: any[];

  constructor(private productService: ProductService, private headerService: HeaderService) {

    this.jsonCurrentUser = localStorage.getItem('currentUser')
    if (this.jsonCurrentUser)
      this.currentUser = JSON.parse(this.jsonCurrentUser)

    headerService.headerData = {
      title: this.currentUser.email,
      icon: 'pi-user'
    }
  }

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
