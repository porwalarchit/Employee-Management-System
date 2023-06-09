import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/service/project.service';
import { AddProjectComponent } from '../add-project/add-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  // isFormOpen: boolean = false;
  // addProjectForm: FormGroup
  projectData: any = [];
  ngbModalRef: NgbModalRef;

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
}
