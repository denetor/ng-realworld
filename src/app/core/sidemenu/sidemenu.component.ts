import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

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

    constructor() { }

    ngOnInit(): void {
    }

}
