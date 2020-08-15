import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  states: SelectItem[];

  selectedState: SelectItem;

  constructor() {
    this.states = [
      {label:'Selecione o Estado', value:null},
      {label:'Pernambuco', value:{id:1, name: 'Pernambuco', code: 'PE'}},
      {label:'Espírito Santo', value:{id:2, name: 'Espírito Santo', code: 'ES'}},
      {label:'São Paulo', value:{id:3, name: 'São Paulo', code: 'SP'}},
      {label:'Ceará', value:{id:4, name: 'Ceará', code: 'CE'}},
      {label:'Bahia', value:{id:5, name: 'Bahia', code: 'BA'}}
  ];

  }

  ngOnInit(): void {
  }

  escolheuEstado () {
    console.log(this.selectedState)
  }
}
