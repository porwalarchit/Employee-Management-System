import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-register-in-a-project',
  templateUrl: './register-in-a-project.component.html',
  styleUrls: ['./register-in-a-project.component.css']
})
export class RegisterInAProjectComponent {
  projectData: any = [];
  addProjectForm: FormGroup;

  constructor(private projectService: ProjectService, private route: Router) { }

  ngOnInit(){
    this.projectService.getAllProjects().subscribe(
      (res)=>{
        this.projectData = res;
        console.log(res);
      },(err)=>{
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
      }, (err) => {
        console.log(err);
      }
    );
  }
}
