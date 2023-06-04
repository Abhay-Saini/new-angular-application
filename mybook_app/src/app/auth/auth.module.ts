import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthComponent,
  ],
  imports: [
    RouterModule,
    AuthRoutingModule
    
  ]
})
export class AuthModule { }
