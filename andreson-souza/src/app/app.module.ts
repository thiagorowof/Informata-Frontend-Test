import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AuthModule } from './auth/auth.module';
import { PrimengModule } from './primeng.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
