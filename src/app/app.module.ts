import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClientesModule } from './clientes/clientes.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClientesModule,
    LoginModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
