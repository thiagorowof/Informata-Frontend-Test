import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario'
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario()

   constructor(private router: Router, private authService: AuthService) { } 

    ngOnInit() {    
      }
      
    fazerLogin(){ 
     this.authService.fazerLogin(this.usuario)
     
    }
}


  

