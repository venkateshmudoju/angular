import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './iemployee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _urlGetEmployees = 'http://dummy.restapiexample.com/api/v1/employees1';
  private _urlGetEmployee = 'http://dummy.restapiexample.com/api/v1/employee/';
  constructor(private http: HttpClient) { }
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._urlGetEmployees);
  }

  getEmployee(): Observable<IEmployee> {
    return this.http.get<IEmployee>(this._urlGetEmployee).pipe(
      retry(1),
      catchError(this.errorHandler)
    );;
  }

  errorHandler(error: HttpErrorResponse) {
    //return Observable.throw(error.message);
    let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   window.alert(errorMessage);
   return throwError(errorMessage);
  }
}
