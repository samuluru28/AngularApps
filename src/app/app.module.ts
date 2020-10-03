import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Practice1Component } from './practice1/practice1.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    EmployeeComponent,
    EmployeedetailsComponent,
    Practice1Component,
    TableComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,   
    MatDatepickerModule,        
    MatNativeDateModule, 
    BrowserAnimationsModule,
    MatInputModule,    
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
