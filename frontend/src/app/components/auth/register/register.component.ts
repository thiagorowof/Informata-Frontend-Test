import { first } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  submit() {
    
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.register(this.registerForm.value)
    .pipe(first()).subscribe(data => {
      alert('cadastrado com sucesso')
      this.router.navigate(['/login'])
    },
    error => {
      alert(error)
    })
  }

}
