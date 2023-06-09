import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/service/project.service';
import { AddProjectComponent } from '../add-project/add-project.component';
import { RegisterInAProjectComponent } from '../register-in-a-project/register-in-a-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projectData: any = [];
  ngbModalRef: NgbModalRef;
  addTeamMembers;

  constructor(private projectService: ProjectService, private modalService: NgbModal) { }

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
  }

  onClick(){
    this.ngbModalRef = this.modalService.open(AddProjectComponent);
  }

  addMembers(i){
    this.ngbModalRef = this.modalService.open(RegisterInAProjectComponent);
    this.ngbModalRef.componentInstance.details = this.projectData[i];
  }
}
