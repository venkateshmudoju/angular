import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // public response = [];
  private _url = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) { }
  getEmployees() {

    return this.http.get<IEmployee[]>(this._url);
    // .subscribe((response) => {
    // return response;
    // console.log(response);
    // })
    //  return this.response;

  }
}
