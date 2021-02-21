import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../app.module';
import {select, Store} from '@ngrx/store';
import {accessToken} from '../../store/selectors/auth.selectors';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.sass']
})
export class SidemenuComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

}
