import { Component, OnInit } from '@angular/core';
import { Password } from 'primeng/password';
import { Usuario } from 'src/model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  usuario: Usuario = {
    id: null,
    userName: null,
    email: null,
    password: null
  }
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  async save() {

    if (this.usuario.userName == null) {
      alert("Please insert a proper username");
    }
    if (this.usuario.email == null) {
      alert("Please insert a proper email");
    }
    if (this.usuario.password == null) {
      alert("Please insert a proper password")
    }
    try {
      await this.usuarioService.save(this.usuario);
      await this.router.navigate(["/login"]);
    } catch (error) {
      alert(error.message);
    }
  }

  ngOnInit() {

  }
}
