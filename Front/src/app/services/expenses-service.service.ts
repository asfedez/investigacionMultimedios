import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { retry, map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpensesServiceService {

  constructor(private http: HttpClient) { }

  //extaer la data de la respuesta
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

  //metodo para traer la lista de ingresos
  getExpenses(): Observable<any> {

    
    return this.http.get(this.url + 'expenses').pipe(
      map(this.extractData)); 
  }


  //getExpenses por id
  getExpense(id): Observable<any> {

    
    return this.http.get(this.url + 'expenses/'+id).pipe(
      map(this.extractData)); 
  }

  //agregar
  addExpense (expense): Observable<any> {
    console.log(JSON.stringify(expense));
    return this.http.post<any>(this.url + 'expenses', JSON.stringify(expense), this.httpOptions).pipe(
      tap((expense) => console.log(`added expense w/ id=${expense.id}`)),
      catchError(this.handleError)
    );
  }
  

  //modificar
  updateExpense (expense, id): Observable<any> {
    console.log(JSON.stringify(expense));
    return this.http.put(this.url + 'expenses/' + id, JSON.stringify(expense), this.httpOptions).pipe(
      tap((expense) => console.log(`added expense w/ id=${id}`)),
      catchError(this.handleError)
    );
  }

  //eliminar
  deleteExpense (id): Observable<any> {
    return this.http.delete<any>(this.url + 'expenses/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted expense id=${id}`)),
      catchError(this.handleError)
    );
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
