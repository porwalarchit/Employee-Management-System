import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployeeReportComponent } from '../add-employee-report/add-employee-report.component';
import { EmployeeReportService } from 'src/app/service/employee-report.service';

@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent {
  ngbModalRef: NgbModalRef;
  reportData: any;

  constructor(private employeeReportService: EmployeeReportService, private modalService: NgbModal){}

  ngOnInit(){
    const empId = localStorage.getItem('empId');
    this.employeeReportService.getAllReportsById(empId).subscribe(
      (res)=>{
        this.reportData = res;
        this.sortReportData();
        console.log(res);
      }, (err)=>{
        console.log(err);
      }
    )
  }

  onClick(){
    this.ngbModalRef = this.modalService.open(AddEmployeeReportComponent);
    this.ngbModalRef.componentInstance.reports = this.reportData;
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

  private sortReportData() {
    this.reportData.sort(
      (a, b) => new Date(b.reportingDate).getTime() - new Date(a.reportingDate).getTime()
    );
  }
}
