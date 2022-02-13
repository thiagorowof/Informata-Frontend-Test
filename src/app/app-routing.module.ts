import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './clientes/cadastro-cliente/cadastro-cliente.component';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';

const routes: Routes = [
  { path: 'cadastro-cliente', component: CadastroClienteComponent },
  { path: 'tela-login', component: TelaLoginComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
