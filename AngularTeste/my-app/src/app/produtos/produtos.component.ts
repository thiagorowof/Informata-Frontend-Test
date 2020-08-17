import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}

class Product {

  public id;
  public codigoErp;
  public apresentacao;
  public nomeComercial;
  public nomeComercialComApresentacao;
  public unidadeMedidaAnvisa;
  public codigoBarrasPrincipal;
}
