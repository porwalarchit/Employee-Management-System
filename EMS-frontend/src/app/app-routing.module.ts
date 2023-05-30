import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserdataComponent } from './home/userdata/userdata.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard',pathMatch:'full'},
  { path: '', component: HomeComponent, children: [{ path: 'register', component: RegisterComponent },{ path: 'dashboard', component: UserdataComponent }] },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
