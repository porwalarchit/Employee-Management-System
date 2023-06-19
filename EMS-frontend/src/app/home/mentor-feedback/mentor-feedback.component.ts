import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MentorService } from 'src/app/service/mentor.service';

@Component({
  selector: 'app-mentor-feedback',
  templateUrl: './mentor-feedback.component.html',
  styleUrls: ['./mentor-feedback.component.css']
})
export class MentorFeedbackComponent {
  @Input() reportData;
  mentorFeedbackForm: FormGroup;

  constructor(private mentorService: MentorService,
    private ngbActiveModal: NgbActiveModal,
    private toastr: ToastrService
    ){}

  ngOnInit(){
    console.log("Employee Report data: ", this.reportData);

    this.mentorFeedbackForm = new FormGroup({
      feedback: new FormControl(this.reportData.mentorFeedback?.feedback, Validators.required),
      flag: new FormControl(false)
    })
  }

  submitFeedback(){
    if(this.reportData.mentorFeedback){
      const feedbackDetails = {
        feedbackId: this.reportData.mentorFeedback.feedbackId,
        feedback: this.mentorFeedbackForm.value.feedback,
        flag: this.mentorFeedbackForm.value.flag,
        mentor: {
          mentorId: localStorage.getItem('empId')
        }, 
        employeeReport: {
          reportId: this.reportData.reportId
        }
      }
      // console.log(feedbackDetails);
      this.mentorService.updateFeedback(feedbackDetails).subscribe(
        (res)=>{
          console.log(res);
          this.toastr.success("Feedback Updated Successfully", "Success");
          this.ngbActiveModal.close();
        }, (err)=>{
          console.log(err);
          this.toastr.error("err.error.message", "Error")
        }
      ) 
    }
    else{
      const feedbackDetails = {
        feedback: this.mentorFeedbackForm.value.feedback,
        flag: this.mentorFeedbackForm.value.flag,
        mentor: {
          mentorId: localStorage.getItem('empId')
        }, 
        employeeReport: {
          reportId: this.reportData.reportId
        }
      }
      this.mentorService.addFeedback(feedbackDetails).subscribe(
        (res)=>{
          console.log(res);
          this.ngbActiveModal.close();
          this.toastr.success("Feedback Submitted Successfully", "Success");
          this.reportData.push(res);
        }, (err)=>{
          console.log(err);
          this.toastr.error("err.error.message", "Error");
        }
      )
    }
  }

  closeForm() {
    this.ngbActiveModal.close();
  }
}
