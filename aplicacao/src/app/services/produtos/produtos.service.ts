import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from './produtos'

/*SERVIÇO CRIADO PARA CONSUMIR API DE PRODUTOS COM HTTPCLIENT*/

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  /*Utilizando HTTPClient e consumindo API de Produtos com uma função retornando a lista com todos os produtos*/
  private readonly API = 'https://us-central1-estudo-974fe.cloudfunctions.net/front_end'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Produto[]>(this.API);
  }
}
