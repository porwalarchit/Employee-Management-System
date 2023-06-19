import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeReportService } from 'src/app/service/employee-report.service';
import { MentorService } from 'src/app/service/mentor.service';
import { MentorFeedbackComponent } from '../mentor-feedback/mentor-feedback.component';

@Component({
  selector: 'app-mentee-report',
  templateUrl: './mentee-report.component.html',
  styleUrls: ['./mentee-report.component.css']
})
export class MenteeReportComponent {
  reportData: any;
  ngbModalRef: NgbModalRef;

  constructor(private mentorService: MentorService, private reportService: EmployeeReportService, private modalService: NgbModal){

  }

  ngOnInit(){
    const menteeId = +localStorage.getItem('empId');
    this.mentorService.getMenteeDetails(menteeId).subscribe(
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

  getRowStatusClass(reportStatus: string) {
    if (reportStatus === 'Pending') {
      return 'row-status-pending';
    } else if (reportStatus === 'Accepted') {
      return 'row-status-accepted';
    } else if (reportStatus === 'Rejected') {
      return 'row-status-rejected';
    } else {
      return '';
    }
  }

  onRowClick(data: any) {
    this.ngbModalRef = this.modalService.open(MentorFeedbackComponent);
    this.ngbModalRef.componentInstance.reportData = data;
  }
}
