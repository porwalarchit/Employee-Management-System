import { Injectable, OnInit } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService implements OnInit{
  role: string;

  constructor(private jwtService: JwtService){}

  ngOnInit(){
    this.assignRole(this.jwtService?.getDecodedData()['role']);
  }

  assignRole(getRole: any){
    this.role = getRole;
  }
  
  getRole(){
    this.assignRole(this.jwtService?.getDecodedData()['role']);
    return this.role;
  }

}
