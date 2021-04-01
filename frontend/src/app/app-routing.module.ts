import { RegisterComponent } from './components/auth/register/register.component';
import { ProductsComponent } from './components/template/products/products.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
  path: "login",
  component: LoginComponent
  },
  {
  path: "register",
  component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
