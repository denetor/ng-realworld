import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninLoginComponent } from './login/signin-login.component';
import { SigninForgotPasswordComponent } from './forgot-password/signin-forgot-password.component';
import { SigninJoinComponent } from './join/signin-join.component';
import {SigninRoutingModule} from './signin-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [SigninLoginComponent, SigninForgotPasswordComponent, SigninJoinComponent],
    imports: [
        CommonModule,
        SigninRoutingModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ]
})
export class SigninModule { }
