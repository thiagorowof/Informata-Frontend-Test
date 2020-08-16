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

  /*Botão de Logout limpando o localStorage */
  logout() {
    localStorage.clear();
  }

  /*Ao iniciar a tela chamando a lista de produtos e listando dentro do quadro */
  ngOnInit() {
    this.service.list().subscribe(dados => this.produtos = dados);
  }
}

