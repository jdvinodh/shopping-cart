import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsList } from '../models/models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  public httpGet(url: string) {
    return this.http
      .get<ProductsList[]>(this.endpoint + `${url}`)
  }
  public httpGetQueryParams(url: string, querParams: string) {
    return this.http
      .get<ProductsList[]>(this.endpoint + `${url}?q=${querParams}`)
  }
}
