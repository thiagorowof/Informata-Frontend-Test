import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AuthGuard } from './auth.guard'

  //providedIn: 'root'
@Injectable() 

export class AuthService { 
  
  private loggedInStatus = false;

  constructor(private http: HttpClient, private router: Router) { }
 
private usuarioAutenticado: boolean = false

fazerLogin(usuario: Usuario){
  if(usuario.nome && usuario.senha){
    this.setLoggedIn(true)    
  }else{
    this.setLoggedIn(false)
    alert('Usuário e/ou senha inválidos')  
  }
}

 get isLoggedIn(){
  return this.loggedInStatus
}


setLoggedIn(value: boolean){

//this.loggedInStatus = value
  this.loggedInStatus = value
  localStorage.setItem('loggedIn', 'true') 
  if(this.loggedInStatus){
    this.router.navigate(['/home'])
  }else if(!this.loggedInStatus){
    this.loggedInStatus  = false
    this.router.navigate(['/'])
  } else{
    this.loggedInStatus  = false
    this.router.navigate(['/'])
  }
  


}








}

