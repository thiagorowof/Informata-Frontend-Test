import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario'
import { AuthService } from './auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario()

   constructor(private router: Router) { } 

    ngOnInit() {    
      }

    fazerLogin(){
      //this.authService.fazerLogin(this.usuario)
      if(localStorage['token'] = '123@qwe'){    
    this.router.navigate(['home']);
      }else{
        this.router.navigate(['home']);
      }
    }
  }


  

