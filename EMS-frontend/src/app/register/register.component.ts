import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupDirective, FormBuilder } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private jwtService: JwtService, private registerservice: RegisterService, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      roles: ['EMPLOYEE'], // Set 'EMPLOYEE' as the default selected value
      employeeType: 1,
      password: ['']
    });
  }

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    roles: new FormControl(""),
    employeeType: new FormControl("")
  })

  onSubmit() {
    const token = localStorage.getItem('token');

    const newUser = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      roles: "ROLE_"+this.registerForm.value.roles,
      department:{deptId: this.registerForm.value.employeeType}
    }

    this.registerservice.registerUser(newUser).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  

}
