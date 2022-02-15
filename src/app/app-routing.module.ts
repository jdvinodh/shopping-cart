import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./component/products-list/product.module').then(x => x.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./component/cart-option/cart.module').then(x => x.CartModule)
  },
  {path:'', redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
