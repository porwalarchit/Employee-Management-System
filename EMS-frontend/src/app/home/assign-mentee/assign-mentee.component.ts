import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MentorService } from 'src/app/service/mentor.service';

@Component({
  selector: 'app-assign-mentee',
  templateUrl: './assign-mentee.component.html',
  styleUrls: ['./assign-mentee.component.css']
})
export class AssignMenteeComponent {
  @Input() employee: any;
  assignMenteeForm: FormGroup;

  constructor(private ngbActiveModal: NgbActiveModal, private mentorService: MentorService){

  }

  ngOnInit(){
    this.assignMenteeForm = new FormGroup({
      mentorId: new FormControl(this.employee.id),
      menteeEmail: new FormControl("")
    })
    
  }

  closeForm() {
    this.ngbActiveModal.close();
  }

  submitForm(){
    const menteeDetails = {
      mentorId: this.assignMenteeForm.value.mentorId,
      employee: {
        email : this.assignMenteeForm.value.menteeEmail
      }
    }

    this.mentorService.assignMentorToMentee(menteeDetails).subscribe(
      (res)=>{
        console.log(res);
      }, (err)=>{
        console.log(err);
      }
    )
  }

  viewMentor(){
    const mentorPayload = {
      mentorId : 2
    }
    console.log(mentorPayload);
    
    this.mentorService.getMenteeDetails({
      mentorId : 2
    }).subscribe(
      (res)=>{
        console.log(res);
      },(err)=>{
        console.log(err);
      }
    )
  }
}
