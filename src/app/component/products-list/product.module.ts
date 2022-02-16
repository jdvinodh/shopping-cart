import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ButtonComponent } from 'src/app/shared/form-elements/components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    NgHttpLoaderModule.forRoot(),
    TranslateModule
  ],
  declarations: [ProductsComponent, ButtonComponent],
})
export class ProductsModule {}
