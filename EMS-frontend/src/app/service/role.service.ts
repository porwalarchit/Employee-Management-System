import { Injectable, OnInit } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService{
  role: string;

  constructor(private jwtService: JwtService){}

  assignRole(getRole: any){
    this.role = getRole;
  }
  
  getRole(){
    return this.role;
  }

}
