import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ProductsList } from '../models/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  public httpGet(url: string) {
    return this.http.get<ProductsList[]>(this.endpoint + `${url}`).pipe(catchError(this.handleError));
  }
  public httpGetQueryParams(url: string, querParams: string) {
    return this.http.get<ProductsList[]>(this.endpoint + `${url}?q=${querParams}`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
