import { AppComponent } from './app.component';
import { MenuComponent } from '../app/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },   
  { path: 'home', component: MenuComponent }  
]; 

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }