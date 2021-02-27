import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto, LoginResponseDto} from './login.model';
import {environment} from '../../../environments/environment';
import {authenticateSuccess, logout, readCurrentUser} from './auth.actions';
import {AppState} from '../../app.module';
import {Store} from '@ngrx/store';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly route = 'auth';

    constructor(
        private http: HttpClient,
        private store: Store<AppState>
    ) {}

    // read accessToken from localStorage. If present, emit action to put it in store
    // abd read logged user's details
    readAccessTokenFromPersistentStorage(): void {
        console.log('readAccessTokenFromPersistentStorage()');
        const accessToken = localStorage.getItem('access_token');
        console.log({accessToken});
        if (accessToken) {
            this.store.dispatch(authenticateSuccess({access_token: accessToken}));
            this.store.dispatch(readCurrentUser(null));
            // TODO this.store.dispatch(readCurrentUser);
        }
    }

    authenticate(dto: LoginDto) {
        return this.http.post(environment.apiUrl + '/' + this.route + '/login', dto);
    }

    logout() {
        this.store.dispatch(logout());
    }
}
