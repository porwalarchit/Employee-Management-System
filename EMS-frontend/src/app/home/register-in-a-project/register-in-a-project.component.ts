import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
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
  emailList;

  constructor(private projectService: ProjectService, private route: Router, private ngbActiveModal: NgbActiveModal, private toastr: ToastrService) { }

  ngOnInit() {
    this.addMemberForm = new FormGroup({
      projectId: new FormControl(this.details.projectId),
      projectName: new FormControl(this.details.projectName),
      projectDesc: new FormControl(this.details.projectDesc),
      status: new FormControl(this.details.status),
      employees: new FormControl(this.details.employees),
      newEmployees: new FormControl("")
    })
    this.emailList = this.addMemberForm.value.employees.map((employee) => employee.email);
  }

  closeForm() {
    this.ngbActiveModal.close();
  }

  submitForm() {
    let updatedEmployees =  this.emailList.map((email) => ({ email }))
    updatedEmployees.push({email :this.addMemberForm.value.newEmployees});
    
    const projectDetails = {
      projectId: this.addMemberForm.value.projectId,
      projectName: this.addMemberForm.value.projectName,
      projectDesc: this.addMemberForm.value.projectDesc,
      status: this.addMemberForm.value.status,
      employees: updatedEmployees
    }
    this.projectService.addMember(projectDetails).subscribe(
      (res) => {
        console.log(res);
        this.toastr.success("Team Member added successfully", "Success");
        this.route.navigate(['/projects']);
      }, (err) => {
        console.log(err);
        this.toastr.error("Some Error occured", "Error");
      }
    );
  }
}
