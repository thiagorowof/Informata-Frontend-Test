import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './clientes/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: 'cadastro-cliente', component: CadastroClienteComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
