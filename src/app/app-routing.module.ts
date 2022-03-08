import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrderComponent } from './orders/list-order/list-order.component';
import { DisplayComponent } from './products/display/display.component';

const routes: Routes = [{ path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{path:'order', component:ListOrderComponent},
{ path: '', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
