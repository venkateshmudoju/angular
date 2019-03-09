import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  public errorMsg: string;
  public employees = [];
  constructor(private _empService: EmployeeService) { }

  ngOnInit() {
    debugger;
    // this.employees = this._empService.getEmployees();
    this._empService.getEmployees().subscribe(data => {
     // debugger;
      this.employees = data
    }, error => this.errorMsg = error);
    
  }
}
