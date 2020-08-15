import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Dados {
  id;
  codigoErp;
  apresentacao;
  nomeComercial;
  ComercialComApresentacao;
  codigoBarrasPrincipal;
}

@Injectable({
    providedIn: 'root'
})

export class MenuService {

    constructor(private http: HttpClient) { }

    async getDados() {
        return await this.http.get<any>('https://us-central1-estudo-974fe.cloudfunctions.net/front_end')
        .toPromise()
        .then(res => <Dados[]>res)        
        .then(data => { return data; });        
    }
}