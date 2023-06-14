import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MentorService } from 'src/app/service/mentor.service';

@Component({
  selector: 'app-assign-mentee',
  templateUrl: './assign-mentee.component.html',
  styleUrls: ['./assign-mentee.component.css']
})
export class AssignMenteeComponent {
  @Input() employee: any;
  assignMenteeForm: FormGroup;
  assignMentee: boolean = false;
  viewMenteeDetails: boolean = false

  constructor(private ngbActiveModal: NgbActiveModal, private mentorService: MentorService, private taostr: ToastrService) {

  }

  ngOnInit() {
    this.assignMenteeForm = new FormGroup({
      mentorId: new FormControl(this.employee.id),
      menteeEmail: new FormControl("", [Validators.required, Validators.email])
    })

    // this.mentorService.getMenteeDetails(+this.employee.id).subscribe(
    //   (res)=>{
    //     this.assignMenteeForm.value.menteeEmail = res.employee.email;
    //     console.log(res);
    //   }
    // )
  }

  closeForm() {
    this.ngbActiveModal.close();
  }

  submitForm() {
    const menteeDetails = {
      mentorId: this.assignMenteeForm.value.mentorId,
      employee: {
        email: this.assignMenteeForm.value.menteeEmail
      }
    }

    this.mentorService.assignMentorToMentee(menteeDetails).subscribe(
      (res) => {
        console.log(res);
        this.taostr.success("Mentee added successfully", "Success");
      }, (err) => {
        console.log(err);
        this.taostr.error("Some error occured", "Error");
      }
    )
  }
}
