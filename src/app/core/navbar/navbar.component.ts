import {Component, Input, OnInit} from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import {Observable} from 'rxjs';
import {AuthState} from '../../store/auth/auth.reducer';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    @Input()
    set auth(auth: Observable<AuthState>) {
        this.auth$ = auth;
    }
    auth$: Observable<AuthState>;

    faBars = faBars;
    faUser = faUser;

    constructor() { }

    ngOnInit(): void {
    }

}
