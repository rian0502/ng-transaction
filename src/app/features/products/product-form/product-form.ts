import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm {
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)])
  });

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      console.log('New Product:', newProduct);
      alert(`Product "${newProduct.name}" with price Rp ${newProduct.price} and stock ${newProduct.stock} has been added.`);
      // Here you can add logic to save the product to a server or state management
    } else {
      console.log('Form is invalid');
    }
  }
}
