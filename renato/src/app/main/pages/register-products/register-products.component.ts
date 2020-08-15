import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../../shared/models/product.model';

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
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const product: ProductModel = this.route.snapshot.data['product'];

    this.registerProductForm = this.formBuilder.group({
      id: [product.id],
      codigoErp: [product.codigoErp, Validators.required],
      apresentacao: [product.apresentacao, Validators.required],
      nomeComercial: [product.nomeComercial, Validators.required],
      unidadeMedidaAnvisa: [product.unidadeMedidaAnvisa, Validators.required],
      codigoBarrasPrincipal: [
        product.codigoBarrasPrincipal,
        Validators.required,
      ],
    });
  }

  save(): void {
    /** Opção para salvar os dados no Local Storage do navegador */
    // this.productService.mockSave(this.registerProductForm.value);

    this.productService.saveOrUpdate(this.registerProductForm.value).subscribe(
      (success) => {
        this.location.back();
      },
      (error) => console.error(error)
    );
  }

  cancel(): void {
    this.registerProductForm.reset();
    this.location.back();
  }
}
