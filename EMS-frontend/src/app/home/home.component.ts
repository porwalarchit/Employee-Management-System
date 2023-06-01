import { Component, OnInit } from '@angular/core';
import { JwtService } from '../service/jwt.service';
import { RoleService } from '../service/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  decodedData: any;
  loggedIn : Boolean = true;
  userRole: string;
  userEmployee: Boolean = false;
  userAdmin : Boolean = false;
  userSuperAdmin: Boolean = false;


  constructor(private router: Router, private role : RoleService) {
  }

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.loggedIn = false;
    } 
    this.userRole = this.role.getRole();
    this.checkUser();
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedIn = true;
    this.router.navigate(['/login']);
  }

  checkUser(){
    if(this.userRole === 'ROLE_EMPLOYEE'){
      this.userEmployee = true;
      this.userAdmin = false;
      this.userSuperAdmin = false;
    }
    else if(this.userRole === 'ROLE_ADMIN'){
      this.userEmployee = false;
      this.userAdmin = true;
      this.userSuperAdmin = false;
    }
    else if(this.userRole === 'ROLE_SUPERADMIN'){
      this.userEmployee = false;
      this.userAdmin = false;
      this.userSuperAdmin = true;
    }
    else{
      this.userEmployee = false;
      this.userAdmin = false;
      this.userSuperAdmin = false;
    }
  }
}
