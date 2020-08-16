import { Component, OnInit } from '@angular/core';
import {Users} from './users';
import {AuthService} from './auth.service';
import { AlertifyService } from './../../alertify.service';
import { Router} from '@angular/router';

import { NgForm } from '@angular/forms';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  items: MenuItem[];

  constructor(private authService: AuthService, private alertity: AlertifyService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      this.alertity.success('login sucessful');
      this.router.navigate(['products']);
    }else{
      this.alertity.error('login not sucessful');
    }

  }
}
