import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [ ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    PanelModule,
    InputTextModule,
    PasswordModule,
    ToolbarModule,
    TableModule,
    ScrollPanelModule,
    ToastModule,
    SliderModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
  ],
  declarations: []
})
export class PrimengModule { }
