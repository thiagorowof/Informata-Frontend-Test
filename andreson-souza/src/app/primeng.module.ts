import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [ ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
  ],
  declarations: []
})
export class PrimengModule { }
