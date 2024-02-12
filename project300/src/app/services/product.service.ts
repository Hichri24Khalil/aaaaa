import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from '../component/product/product.model';
import { PRODUCTS_URL } from '../shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
   
  constructor(private http: HttpClient) { }
  products: Product[] = [
    
  ]
  createProduct(productData: any): Observable<any> {
    console.log(productData);
    
    return this.http.post<any>(`${PRODUCTS_URL}/create`, productData).pipe(
      
      tap({
        next: (response) => {
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${PRODUCTS_URL}/remove/${productId}`).pipe(
      tap({
        next: (response) => {
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${PRODUCTS_URL}/`).pipe(
      
      tap({
        next: (response) => {
          this.products=response;
          console.log(response);

        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  
  editProduct(productId: string, updatedData: any): Observable<Product> {
    return this.http.put<Product>(`${PRODUCTS_URL}/edit/${productId}`, updatedData).pipe(
      
      tap({
        next: (response) => {
          console.log(response);
        },
        error: (errorResponse) => {
          console.log(errorResponse)
        },
      })
    );
  }
  
}
