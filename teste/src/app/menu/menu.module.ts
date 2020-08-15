import { NgModule }      from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent }   from './menu.component';
import { MenuService } from './menu.service';
import {TableModule} from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import {PaginatorModule} from 'primeng/paginator';
import { MenubarModule} from 'primeng/menubar';
import { FormGroup, FormControl } from '@angular/forms';
import {OrderListModule, OrderList} from 'primeng/orderlist';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    TabViewModule,
    PaginatorModule,
    MenubarModule,   
    OrderListModule,
    OrderList,
    ReactiveFormsModule,
    FormGroup,
    FormControl,
    AutoCompleteModule,
    ActivatedRoute,
    Router    
  ],
  declarations: [ MenuComponent ],
  bootstrap:    [ MenuComponent ],
  providers: [MenuService]
})

export class MenuModule { }
