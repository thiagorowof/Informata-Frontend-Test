import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  
  items: MenuItem[];

  ngOnInit() {
    this.items = [
        {
          label: 'Sair', 
          icon: 'pi pi-fw pi-power-off'
        }
    ];
  } 
}
