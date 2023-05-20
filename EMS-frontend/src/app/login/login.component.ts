import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService){}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })


  onSubmitLogin(){
    console.log(this.loginForm.value.email, this.loginForm.value.password);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((res)=>{
      console.log(res);
      console.log(res["token"]);
      
      localStorage.setItem("token", res["token"]);
    }, (err)=>{
      alert(err.error.message);
      console.log(err.error.message);
      
    });
  }
}
