import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    
   
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
