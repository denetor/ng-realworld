import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './app.module';
import {AuthService} from './store/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    auth$: Observable<any>;
    sidemenuOpened = true;

    constructor(
        private store: Store<AppState>,
        private authService: AuthService,
    ) {}

    ngOnInit(): void {
        // read from localStorage the accessToken, if present
        this.authService.readAccessTokenFromPersistentStorage();

        // observe, from the store, the authentication status
        this.auth$ = this.store.select('auth');
    }
}
