import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DisplayComponent } from './display/display.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductbyCategoryComponent } from './view-productby-category/view-productby-category.component';
import { ViewProductbyDateComponent } from './view-productby-date/view-productby-date.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: '', component: DisplayComponent },
  { path: 'add-product', component: AddProductComponent},
  { path: 'view-product/:id', component:ViewProductComponent},
//  { path: 'list-product', component:ViewAllProductComponent},
  { path: 'search-date', component: ViewProductbyDateComponent},
  { path: 'category/:id', component:ViewProductbyCategoryComponent},
  { path: 'delete-product/:id', component:DeleteProductComponent},
  { path: 'update-product/:id', component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
