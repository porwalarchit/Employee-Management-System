import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-register-in-a-project',
  templateUrl: './register-in-a-project.component.html',
  styleUrls: ['./register-in-a-project.component.css']
})
export class RegisterInAProjectComponent {
  projectData: any = [];
  addMemberForm: FormGroup;
  @Input() details: any;

  constructor(private projectService: ProjectService, private route: Router, private ngbActiveModal: NgbActiveModal) { }

  ngOnInit(){
    console.log("Details: ",this.details);
    
    this.addMemberForm = new FormGroup({
      projectId: new FormControl(this.details.projectId),
      projectName: new FormControl(this.details.projectName),
      projectDesc: new FormControl(this.details.projectDesc),
      status: new FormControl(this.details.status),
      employees: new FormControl(this.details.employees)
    })
  }

  closeForm() {
    this.ngbActiveModal.close();
  }

  submitForm() {
    const projectDetails = {
      projectId: this.addMemberForm.value.projectId,
      projectName: this.addMemberForm.value.projectName,
      projectDesc: this.addMemberForm.value.projectDesc,
      status: this.addMemberForm.value.status,
      employees: [{email: this.addMemberForm.value.employees} ]
    }
    console.log(projectDetails);
    this.projectService.addProject(projectDetails).subscribe(
      (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
