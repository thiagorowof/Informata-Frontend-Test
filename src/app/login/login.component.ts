import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { UsuarioService } from '../service/usuario.service';
import { Router } from "@angular/router";
import { empty } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {

  loginInfo = {
    email: null,
    password: null
  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  async login() {

    if (this.loginInfo.email == null || this.loginInfo.email.length == 0) {
      alert("Please insert a proper email");
      return;
    }
    if (this.loginInfo.password == null || this.loginInfo.password.length == 0) {
      alert("Please insert a proper password");
      return;
    }


    try {
      await this.usuarioService.login(this.loginInfo.email, this.loginInfo.password);
      await this.router.navigate(["/produtos"])
    } catch (error) {
      alert(error.message);
    }

  }



  ngOnInit(): void {
  }

}
