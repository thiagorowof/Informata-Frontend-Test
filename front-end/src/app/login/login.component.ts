import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { AuthService } from './auth.service';
//import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginUsuario: FormGroup;

  //private usuario: Usuario = new Usuario();
  

  constructor( ) { }

  ngOnInit(): void {
    //this.loginUsuario;
      
  }

  //enviarDados(){
    //console.log(this.loginUsuario.value); 
    //this.authService.fazerLogin(this.usuario);
    
 // }

  //loginUsusario() {
   // this.loginUsuario = this.fb.group({
     // email: [''
       //Validators.compose([
         // Validators.required,
         // Validators.minLength(2),
         // Validators.maxLength(100)
        //])
   // ],
     // senha: ['', Validators.compose([Validators.senha])]
    //});
  //}
 
}

