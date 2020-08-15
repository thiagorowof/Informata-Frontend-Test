import { MenuComponent } from '../app/menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard'
import { Error404pageComponent } from './error404page/error404page.component'

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },   
  { path: 'home', component: MenuComponent, canActivate: [AuthGuard] },
  { path: '**', component: Error404pageComponent }  
]; 

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }