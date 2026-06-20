import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../core/models/product.model';
import { ProductsService } from '../../core/services/products-service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  
  private productsService = inject(ProductsService);

  productsList = toSignal(this.productsService.getAll(), { initialValue: [] as Product[] });
}