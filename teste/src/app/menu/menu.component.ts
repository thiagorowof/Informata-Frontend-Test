import { Component, OnInit } from '@angular/core';
import { MenuService, Dados } from './menu.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dados: Dados[];

  cols: any[];

  totalRecords: number;

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
  }

}

         
           
            
            
    