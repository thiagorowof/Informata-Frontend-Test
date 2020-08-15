import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Injectable() 

export class AuthService { 
  
  private loggedInStatus = false;

  constructor(private http: HttpClient, private router: Router) { }
 
private usuarioAutenticado: boolean = false

fazerLogin(usuario: Usuario){
  if(usuario.nome === "admin" && usuario.senha === "admin"){    
    localStorage['token'] === '123@qwe';    
    this.router.navigate(['home']);   
  }else{   
    alert('Usuário e/ou senha inválidos')  
  }
}

  get isLoggedIn(){
    return this.loggedInStatus
  }
}

