import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';

import {AppRoutingModule} from '../app-routing';
import { LoginComponent } from './login.component';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    FormsModule,
    PanelModule,
    PasswordModule,
    AppRoutingModule,
    CardModule
  ],
  declarations: [ LoginComponent, LoginComponent ],
  bootstrap:    [ LoginComponent ]
})

export class LoginModule { }
