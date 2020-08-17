import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

import { InputNumberModule } from 'primeng/inputnumber';
import { LoginComponent } from './login/login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { PasswordModule } from 'primeng/password';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

import { ProdutoService } from './produtos/produtosevice';
import { CardModule } from 'primeng/card';

import { MegaMenuModule } from 'primeng/megamenu';
import { MessagesModule } from 'primeng/messages';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProdutosComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputNumberModule,
    FormsModule, CalendarModule, PasswordModule, CarouselModule, InputTextModule, CardModule, MegaMenuModule, MessagesModule, ButtonModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }




