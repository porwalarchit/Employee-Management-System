import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  addProjectForm: FormGroup;

  constructor(private projectService: ProjectService, private route: Router) { }

  ngOnInit(){
    this.addProjectForm = new FormGroup({
      projectId: new FormControl(""),
      projectName: new FormControl(""),
      projectDesc: new FormControl(""),
      status: new FormControl("")
    })
  }

  closeForm() {
    this.route.navigate(['projects']);
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
        this.route.navigate(['/projects']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
