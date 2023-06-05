import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './home/userdata/userdata.component';
import { ProfileComponent } from './home/profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './route-guard/auth-guard.service';

const routes: Routes = [
  {path: '', canActivate: [AuthGuardService], redirectTo:'profile',pathMatch:'full'},
  { path: '', component: HomeComponent, children: [
    { path: 'profile', canActivate: [AuthGuardService],component: ProfileComponent},
    { path: 'register', canActivate: [AuthGuardService] , component: RegisterComponent },
    { path: 'userdata', canActivate: [AuthGuardService] ,component: UserdataComponent },
  ] },
  { path: 'login', component: LoginComponent },
  // {path: '',redirectTo:'profile',pathMatch:'full'},
  // { path: 'profile', canActivate: [AuthGuardService],component: ProfileComponent},
  // { path: 'register', canActivate: [AuthGuardService], component: RegisterComponent },
  // { path: 'userdata', canActivate: [AuthGuardService], component: UserdataComponent },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
