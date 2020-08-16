import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from './produtos'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'https://us-central1-estudo-974fe.cloudfunctions.net/front_end'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Produto[]>(this.API);
  }
}
