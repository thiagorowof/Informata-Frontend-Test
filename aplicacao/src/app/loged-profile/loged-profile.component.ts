import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos/produtos.service'
import { Produto } from '../services/produtos/produtos';


@Component({
  selector: 'app-loged-profile',
  templateUrl: './loged-profile.component.html',
  styleUrls: ['./loged-profile.component.css']
})

export class LogedProfileComponent implements OnInit {

  produtos: Produto[];

  constructor(private service: ProdutosService) { }


  logout() {
    localStorage.clear();

  }

  ngOnInit() {
    this.service.list().subscribe(dados => this.produtos = dados);
  }
  /*cars: any[];

  ngOnInit() {
    this.cars = [{ brand: 'Mercedes', year: '2020', color: 'Red' },
    { brand: 'Mercedes', year: '2020', color: 'Red' },
    { brand: 'Ranaut', year: '2020', color: 'Red' }
    ]
  }*/
}

