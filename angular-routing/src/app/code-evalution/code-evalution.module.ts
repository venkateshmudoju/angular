import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [BindingComponent],
  imports: [
    CommonModule
  ],
  exports :[
    BindingComponent
  ]
})
export class CodeEvalutionModule { }
