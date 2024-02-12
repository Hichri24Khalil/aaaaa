import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product/product.model';


@Component({
  selector: 'app-product-create-dialog',
  templateUrl: 'product-create-dialog.component.html',
  styleUrls: [ 'product-create-dialog.component.scss'],
})
export class ProductCreateDialogComponent {
  public time:string = new Date().toISOString();
  public formData = new FormData();
 
  
  newProduct: Product = new Product('', '', 0, ["food"], false, 0,"",["tunisie"],this.time);

  constructor(public dialogRef: MatDialogRef<ProductCreateDialogComponent>) {}
  selectedPicture: File | null = null;
  onSaveClick(): void {
    this.formData.append("name",this.newProduct.name);
    this.formData.append("price",this.newProduct.price.toString());
    this.formData.append("tags",this.newProduct.tags.toString());
    this.formData.append("stars",this.newProduct.stars.toString());
    this.formData.append("origins",this.newProduct.origins.toString());
    this.formData.append("cookTime",this.time);
    this.dialogRef.close(this.formData);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0] as File;
    
    if(file){
      this.formData.append("imageUrl",file)
    }
  }
}
