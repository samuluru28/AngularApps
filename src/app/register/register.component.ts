import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  registration = [];

  constructor(private builder :FormBuilder) { }
  display= false;

  ngOnInit(): void {
    
    this.registerform = this.builder.group({
      FirstName: ['',Validators.required],
      MiddleName: ['',Validators.required],
      LastName: ['',Validators.required],
      DOB: ['',Validators.required],
      MaritalStatus: ['',Validators.required],
      Email: ['',Validators.required],
      Position: ['',Validators.required],
      Phone: ['',Validators.required],
      Fax: ['',Validators.required],
      Address: ['',Validators.required],
      State: ['',Validators.required],
      ZipCode: ['',Validators.required],
      Relocate: ['',Validators.required],
      Salary: ['',Validators.required],
      Comments: ['',Validators.required]
      
    });
  }
  visible()
  {
  this.display = true;

  }

  onSave() {
    console.log(this.registerform.value);
    this.registration[0] = this.registerform.value;
  }
   
 
}
