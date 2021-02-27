import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.module';
import {AuthState} from '../../../store/auth/auth.reducer';

@Component({
  selector: 'app-welcome-index',
  templateUrl: './welcome-index.component.html',
  styleUrls: ['./welcome-index.component.sass']
})
export class WelcomeIndexComponent implements OnInit {
    auth$: Observable<AuthState>;

    constructor(
        private store: Store<AppState>,
    ) { }

    ngOnInit(): void {
        this.auth$ = this.store.select('auth');
    }

}
