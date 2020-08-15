import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-products',
  templateUrl: './register-products.component.html',
  styleUrls: ['./register-products.component.scss'],
})
export class RegisterProductsComponent implements OnInit {
  registerProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.registerProductForm = this.formBuilder.group({
      codigoErp: ['', Validators.required],
      apresentacao: ['', Validators.required],
      nomeComercial: ['', Validators.required],
      unidadeMedidaAnvisa: ['', Validators.required],
      codigoBarrasPrincipal: ['', Validators.required],
    });
  }

  save(): void {
    this.productService.mockSave(this.registerProductForm.value);
    this.location.back();
  }

  cancel(): void {
    this.registerProductForm.reset();
    this.location.back();
  }
}
