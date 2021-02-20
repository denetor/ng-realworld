import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

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

    constructor() { }

    ngOnInit(): void {
    }

}
