import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

  if(usuario.nome === 'admin' && usuario.senha === 'admin'){
    this.usuarioAutenticado = true;
    this.router.navigate(['/home']);
  }else {
    this.usuarioAutenticado = false;
    alert('Usuário e/ou Senha Inválidos');
  }
}
}
