import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../store/auth/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.sass']
})
export class SidemenuComponent implements OnInit {
    @Input()
    set auth(auth: any) {
        this.auth$ = auth;
    }
    auth$: Observable<any>;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
    }


    logout() {
        this.authService.logout();
    }

}
