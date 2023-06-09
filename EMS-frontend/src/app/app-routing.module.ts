import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './home/userdata/userdata.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './route-guard/auth-guard.service';
import { UpdateProfileComponent } from './home/update-profile/update-profile.component';
import { ProjectComponent } from './home/project/project.component';
import { EmployeeReportComponent } from './home/employee-report/employee-report.component';
import { MenteeReportComponent } from './home/mentee-report/mentee-report.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: '', canActivate: [AuthGuardService], component: HomeComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/update', component: UpdateProfileComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'userdata', component: UserdataComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'reports', component: EmployeeReportComponent },
      { path: 'mentee-report', component: MenteeReportComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
