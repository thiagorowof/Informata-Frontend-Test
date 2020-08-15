import { ProductService } from './../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { AuthService } from '../shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    let a = this.http.get<Product[]>('https://us-central1-estudo-974fe.cloudfunctions.net/front_end')
      .pipe(map(data => data)).subscribe(
        restItems => {
          console.log(restItems);
          this.products = restItems;
        }
      );
  }

}
