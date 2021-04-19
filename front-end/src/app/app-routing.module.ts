import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {
    path: 'home/APP',
    component: HomeComponent
  },
  {
    path: 'cadastro/create',
    component: CadastroComponent
  },
  {
    path: 'login/create',
    component: LoginComponent
  },
  {
    path: 'produtos/Pesquisa',
    component: ProdutosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
