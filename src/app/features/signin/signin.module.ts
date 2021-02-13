import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninLoginComponent } from './login/signin-login.component';
import { SigninForgotPasswordComponent } from './forgot-password/signin-forgot-password.component';
import { SigninJoinComponent } from './join/signin-join.component';
import {SigninRoutingModule} from './signin-routing.module';



@NgModule({
    declarations: [SigninLoginComponent, SigninForgotPasswordComponent, SigninJoinComponent],
    imports: [
        CommonModule,
        SigninRoutingModule,
    ]
})
export class SigninModule { }
