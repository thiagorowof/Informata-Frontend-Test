import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component'; 


const routes: Routes = [
  { path: 'produtos', component: ListComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
