import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { TableModule } from 'primeng/table'
import { HttpClientModule } from '@angular/common/http';


import { TabViewModule } from 'primeng/tabview';
import {PaginatorModule} from 'primeng/paginator';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenuService } from './menu/menu.service';
import {MenubarModule} from 'primeng/menubar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';

import { AuthGuard } from './login/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    TabViewModule,
    PaginatorModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule ,
    AutoCompleteModule,
    CardModule,
    ButtonModule    
  ],
  providers: [MenuService, LoginComponent, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
