import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsList } from 'src/app/models/models/product.model';
import { ApiUrls } from 'src/app/service/api-factory/api-urls';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList$?: Observable<ProductsList[]>;
  errorMessage: string = '';
  page: number = 0;
  constructor(private apiService: ApiService, private cartService: CartService) {
  }

  ngOnInit(): void {

    this.cartService.search.subscribe((val: ProductsList[]) => {
      this.productList$ = this.cartService.search;
    })

    this.productList$ = this.apiService.httpGet(ApiUrls.PRODUCTS).pipe();
  }
  addtocart(item: ProductsList) {
    this.cartService.addtoCart(item);
  }

}
