import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductbyDateComponent } from './view-productby-date/view-productby-date.component';
import { ViewProductbyCategoryComponent } from './view-productby-category/view-productby-category.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    ViewProductbyDateComponent,
    ViewProductbyCategoryComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
