import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }
  
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      }
    ];
    this.getAll();
  } 

  getAll() {
    this.productService.getAll().subscribe(resp => {
      this.products = resp;
    });
  }
}
