import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
    faBars = faBars;
    faUser = faUser;

    constructor() { }

    ngOnInit(): void {
    }

}
