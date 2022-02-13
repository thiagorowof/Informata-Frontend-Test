import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroClienteComponent } from './clientes/cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent, 
    CadastroClienteComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
