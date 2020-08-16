import { HttpClient } from '@angular/common/http';
import { AlertifyService } from './alertify.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './views/login/login.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { RegisterComponent } from './views/login/register/register.component';
import {UserServiceService} from './views/user-service.service';
import { AuthService } from './views/login/auth.service';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import {MenubarModule} from 'primeng/menubar';
import {HttpClientModule} from '@angular/common/http';
import { CrudComponent } from './components/crud/crud.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MenubarModule,
    HttpClientModule
    
  ],
  providers: [UserServiceService, AuthService, AlertifyService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
