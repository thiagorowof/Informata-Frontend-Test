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

    getDados() {
        return this.http.get<any>('https://us-central1-estudo-974fe.cloudfunctions.net/front_end')
        //return this.http.get<any>('assets/menu.json')
        .toPromise()
        .then(res => <Dados[]>res)
        
        .then(data => { return data; });
        
    }
}