import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@NgModule({
  imports: [ ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    PanelModule,
    InputTextModule,
    PasswordModule
  ],
  declarations: []
})
export class PrimengModule { }
