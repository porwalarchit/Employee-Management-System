import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import jwt_decode from 'jwt-decode';
import { JwtService } from '../service/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService, private jwtService: JwtService, private route: Router){}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("")
  })


  onSubmitLogin(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res)=>{
      const jwtToken  = res["token"];
      const decodedToken = jwt_decode(jwtToken);
      
      if(decodedToken){
        this.jwtService.storeDecodedData(decodedToken);
      }
      localStorage.setItem("token", res["token"]);
      localStorage.setItem("role", this.jwtService?.getDecodedData()['role']);

      this.route.navigate(['/profile']);

    }, (err)=>{
      alert(err.error.message);
      console.log(err.error.message);
    });
  }
}
