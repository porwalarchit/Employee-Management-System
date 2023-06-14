import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private profile: ProfileService, private http: HttpClient, private updateprofile: UpdateProfileService, private router: Router,
    private ngZone: NgZone, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.profile.getProfile().subscribe((res) => {
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
        empMdId: this.profileData.employeeDetails?.empMdId,
        gender: this.updateDetailsForm.value.gender,
        dateOfBirth: this.updateDetailsForm.value.dateOfBirth,
        contactNumber: this.updateDetailsForm.value.contactNumber,
        joiningDate: this.updateDetailsForm.value.joiningDate,
        designation: this.profileData.employeeDetails?.designation
      }
      this.updateprofile.updateProfile(updatedDetails).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success("Profile updated Sucessfully!", "Update Profile");
          this.redirectTo('/profile');
        }, (err) => {
          console.log(err);
          this.toastr.error("Some Error occured!", "Update Profile");
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
      this.updateprofile.addDetails(newDetails).subscribe(
        (res) => {
          console.log(res);
          this.toastr.success("Profile updated Sucessfully!", "Update Profile");
          this.redirectTo('/profile');
        }, (err) => {
          console.log(err);
          this.toastr.error("Some Error occured!", "Update Profile");
        }
      );
    }
  }

  redirectTo(url: string) {
    this.ngZone.run(() => this.router.navigateByUrl(url));
  }
}
