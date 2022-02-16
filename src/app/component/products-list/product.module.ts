import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
