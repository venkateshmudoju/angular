import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { ViewComponent } from './javabrains/view/view.component';
import { BindingComponent } from './code-evalution/binding/binding.component';
import { EmployeesComponent } from './code-evalution/employees/employees.component';

const routes: Route[] = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'app-employees', component: EmployeesComponent},
  {
    path: 'settings', 
    component: SettingsComponent,
    children: [
        {path: '', redirectTo:'profile', pathMatch:'full'},
        {path: 'profile', component: SettingsProfileComponent},
        {path: 'contact', component: SettingsContactComponent},
        {path: '**', redirectTo:'profile', pathMatch:'full'}
    ]
  }, 
  {path:'javabrains',component:ViewComponent},
  {path:'code-evalution', component:BindingComponent,
    children: [
      {path: '', redirectTo:'employees', pathMatch:'full'},
        {path: 'employees', component: EmployeesComponent}
    ]
  },   
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
