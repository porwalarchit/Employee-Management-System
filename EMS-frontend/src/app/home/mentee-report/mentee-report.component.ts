import { Component } from '@angular/core';
import { EmployeeReportService } from 'src/app/service/employee-report.service';
import { MentorService } from 'src/app/service/mentor.service';

@Component({
  selector: 'app-mentee-report',
  templateUrl: './mentee-report.component.html',
  styleUrls: ['./mentee-report.component.css']
})
export class MenteeReportComponent {
  reportData: any;

  constructor(private mentorService: MentorService, private reportService: EmployeeReportService){

  }

  ngOnInit(){
    this.mentorService.getMenteeDetails(2).subscribe(
      (res)=>{
        this.reportService.getAllReportsById(res.employee.id).subscribe(
          (res)=>{
            this.reportData = res;
            console.log(res);
          }, (err)=>{
            console.log(err);
          }
        )
        console.log(res);
      }, (err)=>{
        console.log(err);
        
      }
    )
  }
}
