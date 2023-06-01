import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role: string;

  constructor(private jwtService: JwtService){}

  assignRole(getRole: any){
    this.role = getRole;
  }
  
  getRole(){
    this.assignRole(this.jwtService.getDecodedData()['role']);
    
    return this.role;
  }

}
