import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsList } from '../models/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: ProductsList[] = []
  public productList = new BehaviorSubject<ProductsList[]>([]);
  public search = new BehaviorSubject<ProductsList[]>([]);

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: ProductsList[]) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: ProductsList) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((totalValue: ProductsList) => {
      grandTotal += totalValue.price;
    })
    return grandTotal;
  }
  removeCartItem(product: ProductsList) {
    this.cartItemList.map((productListing: ProductsList, index: number) => {
      if (product.id === productListing.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
