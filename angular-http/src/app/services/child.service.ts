import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Child } from '../models/child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  url = 'http://localhost:3000/children'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Get all children
  getChildren(): Observable<Child[]> {
    return this.httpClient.get<Child[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // get a child by it's name
  getChildById(id: number): Observable<Child> {
    return this.httpClient.get<Child>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // save a child
  saveChild(child: Child): Observable<Child> {
    return this.httpClient.post<Child>(this.url, JSON.stringify(child), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // updates a child
  updateChild(child: Child): Observable<Child> {
    return this.httpClient.put<Child>(this.url + '/' + child.id, JSON.stringify(child), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // delte a child
  deleteChild(child: Child) {
    return this.httpClient.delete<Child>(this.url + '/' + child.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}