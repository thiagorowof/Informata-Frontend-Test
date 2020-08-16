import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl(null, Validators.minLength(8)),
      senha: new FormControl(null, Validators.minLength(8))
    });
  }

  onSubmit() {

    /*No submit do formulário ao usuario digitar: usuario e senha, estamos validando 
    primeiramente se as regras estabelecidas no FormGroup estão válidas se sim, entram para
    proxíma validação que é a dos valores dos inputs se estão os mesmos valores salvos no LocalStorage*/
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      if (this.validarUsuario(this.loginForm.value.usuario, this.loginForm.value.senha)) {
        alert('Usuário logado com sucesso!');
        this.router.navigate(['/loged']);
      }
    } else {
      alert('Por favor preencha os dados corretamente.')
    }
  }

  /*Criação do metodo para validar o usuario, passando os usuarios para um array e retornando usuario e senha*/
  private validarUsuario(usuario, senha) {
    var listaUsuarios: any[] = this.userService.carregarUsuarios();
    return listaUsuarios.some(item => item.usuario == usuario && item.senha == senha);
  }





}
