import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { ProductsList } from '../models/models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  public httpGet(url: string) {
    return this.http
      .get<ProductsList[]>(this.endpoint + `${url}`).pipe (
      	catchError(this.handleError)
    	)
  }
  public httpGetQueryParams(url: string, querParams: string) {
    return this.http
      .get<ProductsList[]>(this.endpoint + `${url}?q=${querParams}`).pipe (
      	catchError(this.handleError)
    	)
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // if error is client-side error
      errorMessage = `Error: ${err.message}`;
    } else {
      // if error is server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}

