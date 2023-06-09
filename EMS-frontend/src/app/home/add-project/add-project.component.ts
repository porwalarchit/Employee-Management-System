import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  addProjectForm: FormGroup;
  @Input() projects;

  constructor(private projectService: ProjectService ,private router: Router, private ngbActiveModal: NgbActiveModal, private taostr: ToastrService) { }

  ngOnInit() {
    this.addProjectForm = new FormGroup({
      projectId: new FormControl("", Validators.required),
      projectName: new FormControl("", Validators.required),
      projectDesc: new FormControl(""),
      status: new FormControl("", Validators.required)
    })
  }

  closeForm() {
    this.ngbActiveModal.close();
  }

  submitForm() {
    const projectDetails = {
      projectId: this.addProjectForm.value.projectId,
      projectName: this.addProjectForm.value.projectName,
      projectDesc: this.addProjectForm.value.projectDesc,
      status: this.addProjectForm.value.status,
      employees: []
    }
    this.projectService.addProject(projectDetails).subscribe(
      (res) => {
        console.log(res);
        this.taostr.success("Project added successfully", "Success");
        this.projects.push(res);
        this.ngbActiveModal.close();
      }, (err) => {
        console.log(err);
        this.taostr.error("Some Error occured", "Error");
      }
    );
  }
}
