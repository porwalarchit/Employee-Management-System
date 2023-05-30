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

  constructor() {
  }
}
