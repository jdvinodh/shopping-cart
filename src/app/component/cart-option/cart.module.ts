import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [CartComponent]
})
export class CartModule { }   
