import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginDto} from '../../../store/models/login.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.module';
import {authenticate} from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-signin-login',
  templateUrl: './signin-login.component.html',
  styleUrls: ['./signin-login.component.sass']
})
export class SigninLoginComponent implements OnInit {
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);

    constructor(
        private store: Store<AppState>
    ) { }

    ngOnInit(): void {
    }

    // perform login
    doLogin(): void {
        const dto: LoginDto = {
            email: this.emailFormControl.value,
            password: this.passwordFormControl.value,
        };
        console.log('SigninLoginComponent.doLogin(): dispatching authenticate event');
        console.log({dto});
        this.store.dispatch(authenticate(dto));
    }

}
