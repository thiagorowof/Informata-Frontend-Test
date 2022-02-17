import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './../shared/api.service';
import { produtosModel } from './produtos.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  encontrar: any;
  FormValue !: FormGroup
  produtosModelObj : produtosModel = new produtosModel
  produtosData !: any;

  constructor(private formBuilder: FormBuilder, private Api: ApiService) { }

  ngOnInit(): void {
    this.FormValue = this.formBuilder.group({

    id: [''],
    codigoErp: [''],
    apresentacao: [''],
    nomeComercial: [''],
    nomeComercialComApresentacao: [''],
    unidadeMedidaAnvisa: [''],
    codigoBarrasPrincipal: ['']

    })
    this.getprodutos()
  }

  getprodutos(){
    this.Api.getProdutos()
    .subscribe(res => {
      this.produtosData = res;
    })
  }



}
