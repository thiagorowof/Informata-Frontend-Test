import { Injectable } from '@angular/core';

/*SERVIÇO CRIADO PARA CADASTRO DE USUÁRIOS*/

const CHAVE_USUARIO = 'usuarios';
@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor() { }

  /*Salvando usuário cadastrado no localstorage, caso algum usuário for cadastrado
  novamente, concatentando novos usuários e nao perdendo os antigos */

  salvarUsuario(usuario) {
    let usuariosCadastrados = [];
    if (this.carregarUsuarios()) {
      usuariosCadastrados = usuariosCadastrados.concat(this.carregarUsuarios());
    }
    usuariosCadastrados.push(usuario);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuariosCadastrados));
  }

  /*Carregando usuários do localStorage*/
  carregarUsuarios(): any[] {
    let usuarios = JSON.parse(localStorage.getItem(CHAVE_USUARIO));
    return usuarios;
  }

}
