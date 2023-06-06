import { Component, AfterViewInit, ViewChild, ElementRef, OnInit  } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit{

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
