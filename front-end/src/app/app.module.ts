import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';

//import { AuthService } from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    ProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SlimLoadingBarModule,
    ReactiveFormsModule
  ],
  //providers: [//AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
