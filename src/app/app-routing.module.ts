import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { Practice1Component } from './practice1/practice1.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'employeedetails', component: EmployeedetailsComponent},
  {path: 'p1', component: Practice1Component},
  {path: 'table',component: TableComponent},
  {path: 'register',component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
