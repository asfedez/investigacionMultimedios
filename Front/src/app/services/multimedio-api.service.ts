import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { retry, map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MultimedioApiService {

  
  constructor(private http: HttpClient) {
    
  }


  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  url = 'http://localhost:3000/api/';
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  };

  getEmployees(): Observable<any> {

    console.log(this.http.get<any>(this.url + 'incomes').pipe(retry(1),catchError(this.handleError)));
    
    return this.http.get<any>(this.url + 'incomes')
    .pipe(
            retry(1),
            catchError(this.handleError)
          )
    }

  getIncomes(): Observable<any> {

    console.log(this.http.get(this.url + 'incomes').pipe(
      map(this.extractData)));
    return this.http.get(this.url + 'incomes').pipe(
      map(this.extractData));

     
     
  }


  // Error handling 
handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
  // Get client-side error
  errorMessage = error.error.message;
  } else {
  // Get server-side error
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
  }
  
}
