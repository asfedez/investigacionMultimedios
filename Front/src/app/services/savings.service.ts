import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { retry, map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  constructor(private http: HttpClient) { }

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
  getSavings(): Observable<any> {

    
    return this.http.get(this.url + 'Savings').pipe(
      map(this.extractData)); 
  }


  //getSavings por id
    getSaving(id): Observable<any> {
    return this.http.get(this.url + 'Savings/'+id).pipe(
      map(this.extractData)); 
  }

  //agregar
  addSaving (saving): Observable<any> {
    console.log(JSON.stringify(saving));
    return this.http.post<any>(this.url + 'Savings', JSON.stringify(saving), this.httpOptions).pipe(
      tap((saving) => console.log(`added saving w/ id=${saving.id}`)),
      catchError(this.handleError)
    );
  }
  

  //modificar
  updateSaving (saving, id): Observable<any> {
    console.log(JSON.stringify(saving));
    return this.http.put(this.url + 'Savings/' + id, JSON.stringify(saving), this.httpOptions).pipe(
      tap((saving) => console.log(`added saving w/ id=${id}`)),
      catchError(this.handleError)
    );
  }

  //eliminar
  deleteSaving (id): Observable<any> {
    return this.http.delete<any>(this.url + 'Savings/' + id, this.httpOptions).pipe(
      tap(_ => console.log(`deleted saving id=${id}`)),
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
