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
import { UpdateUserdataComponent } from './home/update-userdata/update-userdata.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: '', canActivate: [AuthGuardService], component: HomeComponent, children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/update', component: UpdateProfileComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'userdata', component: UserdataComponent },
      { path: 'userdata/update/:userId', component: UpdateUserdataComponent },
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
