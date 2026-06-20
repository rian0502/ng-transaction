import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products-service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
  
  
export class ProductForm implements OnInit {

  private productsService = inject(ProductsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  productId: string | null = null;
  isEditMode = false;

  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)]
    }),
    stock: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)]
    })
  });

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.isEditMode = true;

      this.productsService.getById(this.productId).subscribe({
        next: (product) => {
          this.productForm.patchValue({
            name: product.name,
            price: product.price,
            stock: product.stock
          });
        },
        error: (err) => {
          console.error(`[${new Date().toISOString()}] Error fetching product: `, err);
          Swal.fire('Gagal!', 'Data produk tidak ditemukan.', 'error');
          this.router.navigate(['/products']);
        }
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.getRawValue();

      const request$ = this.isEditMode
        ? this.productsService.update(this.productId!, productData)
        : this.productsService.create(productData);

      request$.subscribe({
        next: (response) => {
          console.log('Product saved:', response);

          Swal.fire({
            title: 'Berhasil!',
            text: `Produk "${response.name}" berhasil ${this.isEditMode ? 'diperbarui' : 'ditambahkan'}.`,
            icon: 'success',
            confirmButtonColor: '#0d6efd',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/products']);
            }
          });
        },
        error: (err) => {
          console.error(`[${new Date().toISOString()}] Error saving product: `, err);
          Swal.fire({
            title: 'Gagal Menyimpan!',
            text: 'Terjadi kesalahan saat menghubungi server.',
            icon: 'error',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Tutup'
          });
        }
      });
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}