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

  constructor(private router: Router) {
  }

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.loggedIn = false;
    } 
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedIn = true;
    this.router.navigate(['/login']);
  }
}
