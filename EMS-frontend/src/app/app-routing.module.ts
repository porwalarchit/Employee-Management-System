import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './home/userdata/userdata.component';
import { ProfileComponent } from './home/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo:'profile',pathMatch:'full'},
  { path: '', component: HomeComponent, children: [
    { path: 'profile', component: ProfileComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'userdata', component: UserdataComponent }
  ] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
