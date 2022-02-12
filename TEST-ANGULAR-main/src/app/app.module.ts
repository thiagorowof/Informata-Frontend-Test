import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { ProdutosComponent } from './produtos/produtos.component';
import { FilterPipe } from './shared/filter.pipe';
import { InputTextModule} from 'primeng/inputtext';
import { CardModule} from 'primeng/card';
import { ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    ProdutosComponent,
    FilterPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    TableModule,
    MenubarModule,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
