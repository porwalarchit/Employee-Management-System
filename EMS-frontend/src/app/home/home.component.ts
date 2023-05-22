import { Component } from '@angular/core';
import { JwtService } from '../service/jwt.service';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  decodedData: any;

  constructor(private jwtService: JwtService, private role: RoleService) {
  }
  
  ngAfterContentInit(){
    this.decodedData = this.jwtService.getDecodedData();
    console.log("Role " , this.decodedData.role);
    // const role = this.decodedData.role;
    this.role.assignRole(this.decodedData.role);
  }
}
