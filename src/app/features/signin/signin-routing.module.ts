import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {SigninLoginComponent} from './login/signin-login.component';
import {SigninForgotPasswordComponent} from './forgot-password/signin-forgot-password.component';
import {SigninJoinComponent} from './join/signin-join.component';

const routes = [
    {path: '', component: SigninLoginComponent, pathMatch: 'full'},
    {path: 'forgot-password', component: SigninForgotPasswordComponent, pathMatch: 'full'},
    {path: 'join', component: SigninJoinComponent, pathMatch: 'full'},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SigninRoutingModule { }
