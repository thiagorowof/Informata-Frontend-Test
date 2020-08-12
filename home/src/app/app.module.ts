import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';

import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    MenubarModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}