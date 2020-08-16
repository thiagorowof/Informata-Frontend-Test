import { Component, OnInit } from '@angular/core';
import { Produto } from "src/app/models/produto";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[];
  listaProdutos: Produto[];
  pesquisa: string = '';

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.produtoService.obterTodos().subscribe(data => {
      this.produtos = data;
      this.listaProdutos = data;
    })
  }

  pesquisar() {
    if (this.pesquisa != ''){
      this.listaProdutos = this.produtos.filter(p => p.nomeComercial.toLocaleLowerCase().includes(this.pesquisa.toLowerCase()));
    }
    else {
      this.listaProdutos = this.produtos.slice();
    }
  }
}
