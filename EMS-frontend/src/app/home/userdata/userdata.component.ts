import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProfileService } from 'src/app/service/update-profile.service';
import { UserService } from 'src/app/service/user.service';
import { AssignMenteeComponent } from '../assign-mentee/assign-mentee.component';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  userData: any = [];
  maleImageUrl: string = '../../../assets/images/male-img.png';
  femaleImageUrl: string = '../../../assets/images/female-img.png';

  isEditing: boolean = false;
  designationValue: string = '';
  ngbModalRef: NgbModalRef;

  constructor(private userService: UserService, private updateService: UpdateProfileService,private route: Router, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.userService.getUserData().subscribe((res) => {
      this.userData = res;
      console.log(this.userData);
    })
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

  assignMentee(i){
    this.ngbModalRef = this.modalService.open(AssignMenteeComponent);
    this.ngbModalRef.componentInstance.employee = this.userData[i];
  }
}
