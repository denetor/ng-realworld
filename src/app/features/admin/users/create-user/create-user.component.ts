import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {UserDto} from '../../../../store/users/user.model';
import {usersCreate} from '../../../../store/users/users.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app.module';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {
    userForm = this.formBuilder.group({
        name: [''],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        passwordGroup: this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(10)]],
            passwordRetype: ['', Validators.required],
        })
    });
    // passwordFormGroup = this.userForm.controls['passwordGroup'].

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
    }

    gotoAdminUsers(): void {
        this.router.navigate(['admin', 'users']);
    }

    onSubmit(): void {
        const dto: UserDto = {
            name: this.userForm.get('name').value,
            lastName: this.userForm.get('lastName').value,
            email: this.userForm.get('email').value,
            password: this.userForm.get('passwordGroup')['controls']['password'].value,
        };
        this.store.dispatch(usersCreate(dto));
    }

    isPasswordRetyped(): boolean {
        return this.userForm.get('passwordGroup')['controls']['password'].value ===
            this.userForm.get('passwordGroup')['controls']['passwordRetype'].value;
    }

}
