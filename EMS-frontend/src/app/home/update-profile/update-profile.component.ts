import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile.service';
import { UpdateProfileService } from 'src/app/service/update-profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  profileData: any;
  isMale: boolean = true; // Condition based on your data
  maleImageUrl: string = '../../../assets/images/male-img.png';
  femaleImageUrl: string = '../../../assets/images/female-img.png';

  updateDetailsForm: FormGroup;

  constructor(private profile: ProfileService, private http: HttpClient, private updateprofile: UpdateProfileService) {
  }

  ngOnInit() {
    this.profile.getProfile().subscribe((res) => {
      // console.log(res);
      this.profileData = res;
      console.log(this.profileData);
      if (this.profileData.employeeDetails?.gender === 'Female') {
        this.isMale = false;
      }
      this.updateDetailsForm = new FormGroup({
        gender: new FormControl(this.profileData.employeeDetails?.gender),
        dateOfBirth: new FormControl(this.profileData.employeeDetails?.dateOfBirth),
        contactNumber: new FormControl(this.profileData.employeeDetails?.contactNumber),
        joiningDate: new FormControl(this.profileData.employeeDetails?.joiningDate)
      })
    })


  }

  onSubmit() {
    if (this.profileData.employeeDetails) {
      const updatedDetails = {
        empMdId: this.profileData.employeeDetails.empMdId,
        gender: this.updateDetailsForm.value.gender,
        dateOfBirth: this.updateDetailsForm.value.dateOfBirth,
        contactNumber: this.updateDetailsForm.value.contactNumber,
        joiningDate: this.updateDetailsForm.value.joiningDate,
        // employee: this.profileData.id
        // employee: { id: this.profileData.id, email: this.profileData.email, firstName: this.profileData.firstName, lastName: this.profileData.lastName, password: this.profileData.password, roles: this.profileData.roles,
        // department: this.profileData.department?.deptId}
      }
      console.log(updatedDetails);

      this.updateprofile.updateProfile(updatedDetails).subscribe(
        (res) => {
          console.log(res);
        }, (err) => {
          console.log(err);

        }
      );
    }
    else {
      const newDetails = {
        gender: this.updateDetailsForm.value.gender,
        dateOfBirth: this.updateDetailsForm.value.dateOfBirth,
        contactNumber: this.updateDetailsForm.value.contactNumber,
        joiningDate: this.updateDetailsForm.value.joiningDate,
        employee: { email: this.profileData.email }
      }
      // console.log(newDetails);

      this.updateprofile.addDetails(newDetails).subscribe(
        (res) => {
          console.log(res);
        }, (err) => {
          console.log(err);

        }
      );
    }


  }

}
