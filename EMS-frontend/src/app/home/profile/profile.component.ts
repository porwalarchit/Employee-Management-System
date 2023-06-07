import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;
  isMale: boolean = true; // Condition based on your data
  maleImageUrl: string = '../../../assets/images/male-img.png';
  femaleImageUrl: string = '../../../assets/images/female-img.png';

  constructor(private profile: ProfileService){

  }

  ngOnInit(){
    this.profile.getProfile().subscribe((res)=>{
      // console.log(res);
      this.profileData = res;
      // console.log(this.profileData);
      if(this.profileData.employeeDetails?.gender === 'Female'){
        this.isMale = false;
      }
    })
  }

}
