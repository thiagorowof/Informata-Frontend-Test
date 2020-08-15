import { Component, OnInit } from '@angular/core';
import { MenuService, Dados } from './menu.service'
import {MenuItem} from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';
import { FilterUtils } from 'primeng/utils';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dados: Dados[];

  cols: any[];

  totalRecords: number;

  items: MenuItem[];

  profileForm:  FormGroup


codigoErp: number;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getDados()
    .then(dados => this.dados = dados);

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'codigoErp', header: 'Cód.Erp' },
      { field: 'apresentacao', header: 'Apresentação' },
      { field: 'nomeComercial', header: 'NomeComercial' },
      { field: 'unidadeMedidaAnvisa', header: 'UnidadeMedidaAnvisa' },
      { field: 'codigoBarrasPrincipal', header: 'Cód.BarrasPrincipal' },
      { field: 'nomeComercialComApresentacao', header: 'NomeComercialComApresentação' },
    ]

    this.items = [
      {
          label: 'File',
          icon: 'pi pi-fw pi-file',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {separator:true},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
          label: 'Help',
          icon: 'pi pi-fw pi-question',
          items: [
              {
                  label: 'Contents'
              },
              {
                  label: 'Search', 
                  icon: 'pi pi-fw pi-search', 
                  items: [
                      {
                          label: 'Text', 
                          items: [
                              {
                                  label: 'Workspace'
                              }
                          ]
                      },
                      {
                          label: 'File'
                      }
              ]}
          ]
      },
      {
          label: 'Actions',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {label: 'Save', icon: 'pi pi-fw pi-save'},
                      {label: 'Update', icon: 'pi pi-fw pi-save'},
                  ]
              },
              {
                  label: 'Other',
                  icon: 'pi pi-fw pi-tags',
                  items: [
                      {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                  ]
              }
          ]
      },
      {separator:true},
      {
          label: 'Quit', icon: 'pi pi-fw pi-power-off', routerLink: '/',
          command: (event) => this.onLogout()
      }
  ]; 
 
  FilterUtils['custom'] = (value, filter): boolean => {
    if (filter === undefined || filter === null || filter.trim() === '') {
        return true;
    }

    if (value === undefined || value === null) {
        return false;
    }
    
    return parseInt(filter) > value;
}

    this.profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    });
  }


onLogout(){
    return localStorage.clear();
}

}



         
           
            
            
    