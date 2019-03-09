import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employeeId: Number;
  response: any;
  constructor(private testService : TestService, private http: HttpClient) {
    //debugger;
    testService.printToConsole("Venkatesh")
  }

  ngOnInit() {
    // var sample: 'http://dummy.restapiexample.com/api/v1/employees';
    //  this.http.get('http://dummy.restapiexample.com/api/v1/employee/7202')
    // .subscribe((respose) => console.log(respose));
    // .subscribe((respose) => console.log(respose));
  }

  search() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employee/'+this.employeeId)
    .subscribe((response) => {
      this.response = response;
      console.log(response);
    })
  }
}
