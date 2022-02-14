import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaDeCadastroComponent } from './tela-de-cadastro/tela-de-cadastro.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { TelaLsProdutosComponent } from './tela-ls-produtos/tela-ls-produtos.component';

const routes: Routes = [
    {
      path:'cadastro',
      component: TelaDeCadastroComponent,
    },
    { 
      path:'',
      component: TelaDeLoginComponent,
    
    },
    {
      path:'produtos',
      component: TelaLsProdutosComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
