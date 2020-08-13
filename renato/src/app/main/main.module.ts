import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing';
import { ProductsComponent } from './pages/products/products.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [ProductsComponent, RegisterProductsComponent, LayoutComponent, ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
  ],
})
export class MainModule {}
