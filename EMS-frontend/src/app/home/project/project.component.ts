import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  isFormOpen: boolean = false;
  addProjectForm: FormGroup
  projectData: any = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (res)=>{
        this.projectData = res;
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
    )

    this.addProjectForm = new FormGroup({
      projectId: new FormControl(""),
      projectName: new FormControl(""),
      projectDesc: new FormControl(""),
      status: new FormControl("")
    })
  }

  openForm() {
    this.isFormOpen = true;
  }

  closeForm() {
    this.isFormOpen = false;
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
        this.isFormOpen = false;
        console.log(res);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
