import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Produto } from './produto';

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) { }

    getProdutos() {
        return this.http.get<any>('assets/imagens/demo/product')
            .toPromise()
            .then(res => <Produto[]>res.data)
            .then(data => { return data; });
    }
}