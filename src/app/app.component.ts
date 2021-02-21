import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {accessToken} from './store/selectors/auth.selectors';
import {map} from 'rxjs/operators';
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
        // this.accessToken$ = this.store.pipe(
        //     select(accessToken),
        //     // map(value => {
        //     //     console.log(value);
        //     // })
        // );
    }
}
