import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  
}
  onsubmit(){

    this.router.navigate(['employeedetails']);
  }
}
