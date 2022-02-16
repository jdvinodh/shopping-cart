import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { ProductsList } from 'src/app/models/models/product.model';
import { ApiUrls } from 'src/app/service/api-factory/api-urls';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList$?: Observable<ProductsList[]>;
  page: number = 0;
  errorMsg: string = '';
  constructor(
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // display products on search
    this.cartService.search.subscribe((val: ProductsList[]) => {
      this.productList$ = this.cartService.search;
    });

    // load the products on load
    this.productList$ = this.apiService.httpGet(ApiUrls.PRODUCTS).pipe(
      catchError((err) => {
        this.errorMsg = err;
        return of();
      })
    );
  }

  // add a product to the cart
  addtocart(item: ProductsList) {
    this.cartService.addtoCart(item);
  }
}
