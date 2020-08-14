import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent }   from './menu.component';
import { MenuService } from './menu.service';

import {TableModule} from 'primeng/table';


import { TabViewModule } from 'primeng/tabview';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    PaginatorModule
  ],
  declarations: [ MenuComponent ],
  bootstrap:    [ MenuComponent ],
  providers: [MenuService]
})

export class MenuModule { }
