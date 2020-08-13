import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterProductsComponent } from './pages/register-products/register-products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: 'new-product', component: RegisterProductsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
