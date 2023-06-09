import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { EmployeeReportService } from 'src/app/service/employee-report.service';

@Component({
  selector: 'app-add-employee-report',
  templateUrl: './add-employee-report.component.html',
  styleUrls: ['./add-employee-report.component.css']
})
export class AddEmployeeReportComponent {
  employeeReportForm: FormGroup;
  empEmail: String;
  @Input() reports;

  constructor(private employeeReportService: EmployeeReportService, 
    private ngbActiveModal: NgbActiveModal,
    private toastr: ToastrService
    ){}

  ngOnInit(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const todayDate = `${year}-${month}-${day}`;

    this.empEmail = jwt_decode(localStorage.getItem('token'))['sub'];

    this.employeeReportForm = new FormGroup({
      reportingDate: new FormControl(todayDate, Validators.required),
      workDone: new FormControl("", Validators.required),
      reportStatus: new FormControl("Pending")
    })
  }
  
  
  submitReport(){
    const reportDetails = {
      reportingDate: this.employeeReportForm.value.reportingDate,
      workDone: this.employeeReportForm.value.workDone,
      reportStatus: this.employeeReportForm.value.reportStatus,
      employee: {
        email: this.empEmail
      }
    }
    this.employeeReportService.addEmployeeReport(reportDetails).subscribe(
      (res)=>{
        this.reports.push(res);
        this.toastr.success("Report Added Sucessfully", "Success");
        this.ngbActiveModal.close();
      }, (err)=>{
        console.log(err);
        this.toastr.error("Some Error Occured", "Error");
      }
    )
  }
  
  closeForm() {
    this.ngbActiveModal.close();
  }
}
