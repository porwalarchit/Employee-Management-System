import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  userData: any = [];


  isEditing: boolean = false;
  designationValue: string = '';

  constructor(private userService: UserService, private route: Router) {

  }

  ngOnInit() {
    this.userService.getUserData().subscribe((res) => {
      this.userData = res;
    })
  }

  editDetails(userId) {
    this.route.navigate(['userdata/update', userId]);
  }


  enableEdit(data) {
    data.isEditing = true;
    data.designationValue = data.employeeDetails?.designation;
  }

  saveEdit(data) {
    data.isEditing = false;
    console.log(this.designationValue);
    
    console.log(data);
    // Perform save logic here, such as making an API call or updating the data locally
  }

  cancelEdit(data) {
    data.isEditing = false;
  }

}
