import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    auth$: Observable<any>;
    sidemenuOpened = true;

    constructor(
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.auth$ = this.store.select('auth');
    }
}
