import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateProfileService } from 'src/app/service/update-profile.service';
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

  constructor(private userService: UserService, private updateService: UpdateProfileService,private route: Router) {

  }

  ngOnInit() {
    this.userService.getUserData().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
      
    })
  }

  editDetails(userId) {
    this.route.navigate(['userdata/update', userId]);
  }


  enableEdit(data) {
    data.isEditing = true;
    data.designationValue = data.employeeDetails?.designation;
  }

  saveEdit(data,i) {
    data.isEditing = false;    
    if(data.employeeDetails){
      const updatedDetails = {
        empMdId: data.employeeDetails?.empMdId,
        gender: data.employeeDetails?.gender,
        dateOfBirth: data.employeeDetails?.dateOfBirth,
        contactNumber: data.employeeDetails?.contactNumber,
        joiningDate: data.employeeDetails?.joiningDate,
        designation: data.employeeDetails.designation
      }
      this.updateService.updateProfile(updatedDetails).subscribe(
        (res)=>{
          this.userData[i] = data;
          console.log(res);
        }, (err) => {
          console.log(err);
        }
      )
    }
    else{
      const newDetails = {
        designation: data.employeeDetails.designation,
        employee: {email: data.email}
      }
      this.updateService.addDetails(newDetails).subscribe(
        (res) => {
          this.userData[i] = data;
          console.log(res);
        }, (err) => {
          console.log(err);
        }
      );
    }
  }

  cancelEdit(data) {
    data.isEditing = false;
  }

}
