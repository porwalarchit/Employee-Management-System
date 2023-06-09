import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  decodedData: any;
  loggedIn: Boolean = true;
  userRole: string;
  userEmployee: Boolean = false;
  userAdmin: Boolean = false;
  userSuperAdmin: Boolean = false;


  constructor(private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loggedIn = false;
    }
    this.userRole = localStorage.getItem('role');
    this.checkUser();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.loggedIn = true;
    this.router.navigate(['/login']);
  }

  checkUser() {
    if (this.userRole === 'ROLE_EMPLOYEE') {
      this.userEmployee = true;
      this.userAdmin = false;
      this.userSuperAdmin = false;
    }
    else if (this.userRole === 'ROLE_ADMIN') {
      this.userEmployee = false;
      this.userAdmin = true;
      this.userSuperAdmin = false;
    }
    else if (this.userRole === 'ROLE_SUPERADMIN') {
      this.userEmployee = false;
      this.userAdmin = false;
      this.userSuperAdmin = true;
    }
    else {
      this.userEmployee = false;
      this.userAdmin = false;
      this.userSuperAdmin = false;
    }
  }
}
