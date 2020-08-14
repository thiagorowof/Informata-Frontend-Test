import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    InputMaskModule,
    ReactiveFormsModule,
    PasswordModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
