import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaDeCadastroComponent } from './tela-de-cadastro/tela-de-cadastro.component';
import { TelaDeLoginComponent } from './tela-de-login/tela-de-login.component';
import { TelaLsProdutosComponent } from './tela-ls-produtos/tela-ls-produtos.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    TelaDeCadastroComponent,
    TelaDeLoginComponent,
    TelaLsProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
