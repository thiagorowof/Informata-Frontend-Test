import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogedProfileComponent } from './loged-profile/loged-profile.component';
import { UsersService } from '../app/services/users/users.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { OrderListModule } from 'primeng/orderlist';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogedProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    OrderListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
