import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  returnUrl: string

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['',[Validators.required, Validators.minLength(6)]]
    })

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'

  }

  get f() { return this.loginForm.controls; }

  submit(){

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl])
      },
      error => {
        alert(error)
      })


  }

}
