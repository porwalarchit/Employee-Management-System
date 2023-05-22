import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private role: string = '';

  assignRole(getRole: any){
    this.role = getRole;
  }
  
  getRole(){
    return this.role;
  }

}
