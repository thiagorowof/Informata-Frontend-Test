import { Injectable } from '@angular/core';

const CHAVE_USUARIO = 'usuarios';
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  salvarUsuario(usuario) {
    let usuariosCadastrados = [];
    if (this.carregarUsuarios()) {
      usuariosCadastrados = usuariosCadastrados.concat(this.carregarUsuarios());
    }
    usuariosCadastrados.push(usuario);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuariosCadastrados));
  }

  carregarUsuarios() {
    return JSON.parse(localStorage.getItem(CHAVE_USUARIO));
  }

}
