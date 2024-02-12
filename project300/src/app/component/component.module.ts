import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { UserComponent } from './user/user.component';


import { TableComponent } from "./table/table.component";
import { UserCreateDialogComponent } from './user-create-dialog/user-create-dialog.component';
import { ProductCreateDialogComponent } from './product-create-dialog/product-create-dialog.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatFormFieldModule,
    UserComponent,
    
    TableComponent,
  ],
  declarations: [
    
    ProductCreateDialogComponent,
    UserCreateDialogComponent
  ],
})
export class ComponentsModule { }
