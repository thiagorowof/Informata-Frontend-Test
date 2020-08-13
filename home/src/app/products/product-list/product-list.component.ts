import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor() { }
  
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      }
    ];
    this.products = [
      {id: 19, codigoErp: 190, apresentacao: 'J&J 24UN', nomeComercial: 'ABS PARA SEIOS', nomeComercialComApresentacao: 'ABS PARA SEIOS J&J 24UN', unidadeMedidaAnvisa: 'FRASCOS', codigoBarrasPrincipal: 7894567890135},
      {id: 59, codigoErp: 190, apresentacao: 'J&J 24UN', nomeComercial: 'ABS PARA SEIOS', nomeComercialComApresentacao: 'ABS PARA SEIOS J&J 24UN', unidadeMedidaAnvisa: 'FRASCOS', codigoBarrasPrincipal: 7894556890135},
      {id: 69, codigoErp: 190, apresentacao: 'J&J 24UN', nomeComercial: 'ABS PARA SEIOS', nomeComercialComApresentacao: 'ABS PARA SEIOS J&J 24UN', unidadeMedidaAnvisa: 'FRASCOS', codigoBarrasPrincipal: 7894567480135},
      {id: 17, codigoErp: 190, apresentacao: 'J&J 24UN', nomeComercial: 'ABS PARA SEIOS', nomeComercialComApresentacao: 'ABS PARA SEIOS J&J 24UN', unidadeMedidaAnvisa: 'FRASCOS', codigoBarrasPrincipal: 7899367890135},
    ]
  } 
}
