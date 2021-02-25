import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '/assets/data/employees.json';
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<IEmployee[]> {
    /*     return [
      { id: 1, name: 'Andrew', age: 30 },
      { id: 2, name: 'Brandon', age: 25 },
      { id: 3, name: 'Christina', age: 26 },
      { id: 4, name: 'Elena', age: 28 },
    ]; */
    return (
      this.http
        .get<IEmployee[]>(this._url)
        /* .catch(this.errorHandler) */
        .pipe(retry(1), catchError(this.errorHandler))
    );
  }
  errorHandler(error: HttpErrorResponse) {
    /* return Observable.throw(error.message || 'Server Erroe'); */
    return throwError(error.message || 'Server Error');
  }
}
