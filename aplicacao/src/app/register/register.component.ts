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

  registerForm: FormGroup;

  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      usuario: new FormControl(null, Validators.minLength(8)),
      senha: new FormControl(null)
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.salvarUsuario(this.registerForm.value);
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/']);

    } else {
      alert('Porfavor preencha os dados corretamente.')
    }

  }
}
