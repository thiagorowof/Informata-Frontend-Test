import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private rota: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
        Validators.minLength(10),
      ]),
      senha: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {}

  fazerLogin() {
    const dadosLogin = this.loginForm.value;
    const login = JSON.parse(localStorage.getItem('usuario'));
    if (login && login.senha == dadosLogin.senha) {
      this.rota.navigate(['/produtos'], { replaceUrl: true });
    }
  }
}
