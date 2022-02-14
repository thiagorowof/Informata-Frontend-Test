import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public buscar(cpf: string): boolean{
    return localStorage.getItem(cpf) != null;
  }
}
