import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  public salvar(data: Cliente){
    localStorage.setItem(data.cpf.toString(), JSON.stringify(data));
  }
}
