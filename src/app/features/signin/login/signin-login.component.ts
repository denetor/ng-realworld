import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {LoginDto} from '../../../store/auth/login.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.module';
import {authenticate} from '../../../store/auth/auth.actions';
import {Observable} from 'rxjs';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-signin-login',
  templateUrl: './signin-login.component.html',
  styleUrls: ['./signin-login.component.sass']
})
export class SigninLoginComponent implements OnInit {
    auth$: Observable<any>;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);

    constructor(
        private store: Store<AppState>,
        private router: Router,
    ) { }

    ngOnInit(): void {
        // observe logged user to redirect to home when logged
        this.auth$ = this.store.select('auth');
        this.auth$.subscribe(
            data => {
                if (data && data.accessToken) {
                    this.router.navigate(['/']);
                }
            }
        )
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
