import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';
  routes = [
    {linkName: 'Home', url: 'home'},
    {linkName: 'Settings', url: 'settings'},
    {linkName: 'Java Brains', url: 'javabrains'},
    {linkName: 'Code Evalution', url: 'code-evalution'},
    {linkName: 'Employees', url: 'app-employees'}
  ]

    

}
