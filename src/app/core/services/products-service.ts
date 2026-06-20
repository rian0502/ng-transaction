import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient)
  private url = 'http://localhost:3000/products';


  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`)
  }

  create(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  update(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.patch<Product>(`${this.url}/${id}`, product);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
