import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from './login.model';
import {environment} from '../../../environments/environment';
import {authenticateSuccess} from './auth.actions';
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
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            this.store.dispatch(authenticateSuccess({access_token: accessToken}));
        }
    }

    authenticate(dto: LoginDto) {
        return this.http.post(environment.apiUrl + '/' + this.route + '/login', dto);
    }
}
