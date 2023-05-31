import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  userData: any = []
  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.userService.getUserData().subscribe((res)=>{
      // console.log(res);
      this.userData = res;
    })
  }
}
