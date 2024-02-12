import {  Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Product } from './product.model';
import { FormsModule, NgModel } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ProductCreateDialogComponent } from '../product-create-dialog/product-create-dialog.component';
import { ProductService } from 'src/app/services/product.service';
import { BASE_URL, PRODUCTS_URL } from 'src/app/shared/constants/urls';
@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [ NgFor, NgIf,FormsModule,MatIconModule],
  templateUrl: 'product.component.html',
  styleUrls : ['product.component.scss'],
  styles: [
    
  ],
})
export class ProductComponent {
  filteredproducts: Product[] = this._productService.products;
  
  constructor(public dialog: MatDialog,public _productService:ProductService) {
   
  }
  
  ngOnInit():void{
    this.getProducts()
  }
  getProducts(): void {
    this._productService.getProducts().subscribe(
      (products) => {
        this.filteredproducts=[];
        for (let index = 0; index < products.length; index++) {
          var product = products[index];
          product.imageUrl= BASE_URL +"/uploads/"+product.imageUrl;
          console.log(product.imageUrl);
          this.filteredproducts.push(product)
          
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
  newProduct: Product= new Product("","",0,[],false,0,"",[],"");
  searchTerm: string = '';
  editingProductIndex: number = -1;
  

  editProduct(productId: string, updatedData: any) {
    this._productService.editProduct(productId, updatedData).subscribe(
      (editedProduct) => {
        // Handle successful product edit response here
        console.log('Product edited successfully:', editedProduct);

        // You can perform further actions, such as updating the UI
      },
      (error) => {
        // Handle product edit error here
        console.error('Product edit failed:', error);

        // Display an error message to the user if needed
      }
    );
  }

  

  removeProduct(productId: string) {
    this._productService.deleteProduct(productId).subscribe(
      () => {
        // Handle successful product deletion response here
        console.log('Product deleted successfully');
        this.filteredproducts=this.filteredproducts.filter(item => item.id !== productId);

        // You can perform further actions, such as updating the UI
      },
      (error) => {
        // Handle product deletion error here
        console.error('Product deletion failed:', error);

        // Display an error message to the user if needed
      }
    );
  }
  
  applyFilter(): void {
    // Filter the Product list based on the search term
    this.filteredproducts = this._productService.products.filter((Product) =>
      Product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ProductCreateDialogComponent, {
      width: '400px', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe((result: Product) => {
      
        if(result.name != ""  && result.price != 0 && result.stars != 0 ){
          this._productService.createProduct(result).subscribe(() =>{
            console.log("shit");
          });
        }
      }
    );
  }
}


