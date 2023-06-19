import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MentorService } from '../service/mentor.service';

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
  menteeExists: Boolean = false;


  constructor(private mentorService: MentorService, private router: Router, private taostr: ToastrService) {
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loggedIn = false;
    }
    this.userRole = localStorage.getItem('role');
    this.checkUser();
    
    const empId = +localStorage.getItem('empId');
    this.mentorService.getMenteeDetails(empId).subscribe(
      (res)=>{
        this.menteeExists = true;        
      }
    )
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.loggedIn = true;
    this.taostr.success("Logged out successfully", "Success");
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
