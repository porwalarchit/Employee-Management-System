import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterService } from '../service/register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private jwtService: JwtService, private registerservice: RegisterService, private formBuilder: FormBuilder, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      roles: ['EMPLOYEE'], // Set 'EMPLOYEE' as the default selected value
      employeeType: 1,
      password: ['argusadmin']
    });
  }

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
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
        this.toastr.success("Employee Added Successfully", "Success");
        this.route.navigateByUrl("/userdata");
      },
      (err)=>{
        this.toastr.error(err.error.message, "Error");
      }
    )
  }
  

}
