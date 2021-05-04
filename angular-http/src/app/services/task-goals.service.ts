import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { TaskGoals } from '../models/task-goals';

@Injectable({
  providedIn: 'root'
})
export class TaskGoalsService {
  url = 'http://localhost:3000/task-goals'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Get all tasks goals
  getTaskGoals(): Observable<TaskGoals[]> {
    return this.httpClient.get<[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // get a task goal by it's id
  getTaskGoal(child_id: number, task_id: number): Observable<TaskGoals> {
    return this.httpClient.get<TaskGoals>(this.url + '/' + child_id + ',' + task_id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // save a task goal
  saveTaskGoal(taskGoal: TaskGoals): Observable<TaskGoals> {
    return this.httpClient.post<TaskGoals>(this.url, JSON.stringify(taskGoal), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // updates a task goal
  updateTaskGoals(taskGoals: TaskGoals): Observable<TaskGoals> {
    return this.httpClient.put<TaskGoals>(this.url + '/' + taskGoals.id, JSON.stringify(taskGoals), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // delte a task goal
  deleteTaskGoals(taskGoals: TaskGoals) {
    return this.httpClient.delete<TaskGoals>(this.url + '/' + taskGoals.id, this.httpOptions)
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
