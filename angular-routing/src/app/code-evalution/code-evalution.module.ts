import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [BindingComponent, EmployeesComponent],
  imports: [
    CommonModule
  ],
  exports :[
    BindingComponent
  ]
})
export class CodeEvalutionModule { }
