import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*Configurações e validações do formulário de cadastro*/

  registerForm: FormGroup;

  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  /*Criação do formgroup com validação de usuário para tamanho minimo de letras*/
  ngOnInit() {
    this.registerForm = new FormGroup({
      usuario: new FormControl(null, Validators.minLength(8)),
      senha: new FormControl(null)
    });
  }

  /*Ao submit do formulário caso for válido salvando dados e voltando a tela de login*/
  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.salvarUsuario(this.registerForm.value);
      /*Caso dados válidos feedback e navegação da rota para tela de login*/
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/']);

    } else {
      /*Caso dados inválidos feedback pedindo correção*/
      alert('Por favor preencha os dados corretamente.')
    }

  }
}
