import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/models/produto';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  consultaUrlProdutos = 'https://us-central1-estudo-974fe.cloudfunctions.net/front_end';

  constructor(private http: HttpClient) {}

  obterTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.consultaUrlProdutos);
  }

}
