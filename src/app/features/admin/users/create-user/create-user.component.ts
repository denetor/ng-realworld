import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

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
    ) { }

    ngOnInit(): void {
    }

    gotoAdminUsers(): void {
        this.router.navigate(['admin', 'users']);
    }

    onSubmit(): void {
        console.log(this.userForm.value);
    }

}
