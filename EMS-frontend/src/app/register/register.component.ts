import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { JwtService } from '../service/jwt.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private jwtService: JwtService, private http: HttpClient) { }

  ngOnInit() {

  }

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    roles: new FormControl("")
  })

  onSubmit() {
    const token = localStorage.getItem('token');
    // console.log("TOKEN: ", token);

    // Create the request headers with the bearer token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("HEADER: ", headers);

    const newUser = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      roles: "ROLE_"+this.registerForm.value.roles,
    }

    this.http.post('http://localhost:8080/api/adduser', newUser ,{headers})
    .subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
