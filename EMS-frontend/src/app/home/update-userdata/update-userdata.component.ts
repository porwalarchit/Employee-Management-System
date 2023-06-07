import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/service/profile.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-userdata',
  templateUrl: './update-userdata.component.html',
  styleUrls: ['./update-userdata.component.css']
})
export class UpdateUserdataComponent {
  userData: any;
  isMale: boolean = true; // Condition based on your data
  maleImageUrl: string = '../../../assets/images/male-img.png';
  femaleImageUrl: string = '../../../assets/images/female-img.png';

  constructor(private route: ActivatedRoute, private userdata: UserService){

  }

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      const userId = params['userId'];      
      this.userdata.getUserDataById(userId).subscribe(
        (res)=>{
          this.userData = res;
          if (this.userData.employeeDetails?.gender === 'Female') {
            this.isMale = false;
          }
          console.log(res);
        }, (err)=>{
          console.log(err);
          
        }
      )
    })
  }

}
