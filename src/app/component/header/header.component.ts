import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ProductsList } from 'src/app/models/models/product.model';
import { ApiUrls } from 'src/app/service/api-factory/api-urls';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public totalItem: number = 0;
  public searchTerm: string = '';
  productList: ProductsList[] = [];
  errorMsg: string = '';
  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  search(searchTerm: string) {
    this.apiService
      .httpGetQueryParams(ApiUrls.PRODUCTS, searchTerm)
      .pipe(catchError(this.handleError))
      .subscribe((res) => {
        this.productList = res;
        this.cartService.search.next(this.productList);
      });
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errorMsg = `Error: ${error.error.message}`;
    } else {
      this.errorMsg = `Error: ${error.message}`;
    }
    return of([]);
  }
}
