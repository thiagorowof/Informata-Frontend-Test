import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-informata-frontend-test';
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Clientes',
        icon:'pi pi-fw pi-user',
        items: [
            {
                label: 'Cadastro',
                icon:'pi pi-fw pi-user-plus',
                routerLink: '/cadastro-cliente'

            },            
            {
                label: 'Login',
                icon:'pi pi-fw pi-users',
                routerLink:'/tela-login'
            }    
        ]
      }
    ]
  }
}
