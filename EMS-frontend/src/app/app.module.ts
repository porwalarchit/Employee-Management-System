import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './home/userdata/userdata.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { UpdateProfileComponent } from './home/update-profile/update-profile.component';
import { ProjectComponent } from './home/project/project.component';
import { AddProjectComponent } from './home/add-project/add-project.component';
import { RegisterInAProjectComponent } from './home/register-in-a-project/register-in-a-project.component';
import { AssignMenteeComponent } from './home/assign-mentee/assign-mentee.component';
import { EmployeeReportComponent } from './home/employee-report/employee-report.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddEmployeeReportComponent } from './home/add-employee-report/add-employee-report.component';
import { MenteeReportComponent } from './home/mentee-report/mentee-report.component';
import { MentorFeedbackComponent } from './home/mentor-feedback/mentor-feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserdataComponent,
    ProfileComponent,
    ErrorComponent,
    UpdateProfileComponent,
    ProjectComponent,
    AddProjectComponent,
    RegisterInAProjectComponent,
    AssignMenteeComponent,
    EmployeeReportComponent,
    AddEmployeeReportComponent,
    MenteeReportComponent,
    MentorFeedbackComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right",
      preventDuplicates : true,
      timeOut: 2500, 
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
