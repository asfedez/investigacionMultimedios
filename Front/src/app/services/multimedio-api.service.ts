import { Injectable } from '@angular/core';
//Importas las siguientes
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError  } from 'rxjs';
import { retry, map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MultimedioApiService {

  //Declarar variable
  constructor(private http: HttpClient) {
    
  }

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
  getIncomes(): Observable<any> {

    return this.http.get(this.url + 'incomes').pipe(
      map(this.extractData)); 
  }


  //getIncomes por id
  //agregar
  //modificar
  //eliminar


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
