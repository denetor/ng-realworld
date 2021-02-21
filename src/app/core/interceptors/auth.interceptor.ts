import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {AppState} from '../../app.module';
import {Store} from '@ngrx/store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private accessToken: string | null;


    constructor(
        private store: Store<AppState>
    ) {
        this.store.select('auth').subscribe(
            authData => {
                this.accessToken = authData.accessToken;
            },
            err => {
                this.accessToken = null;
            }
        );
    }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.accessToken) {
            const clonedRequest = request.clone({
                headers: request.headers.set('Authorization', 'Bearer ' + this.accessToken)
            });
            return next.handle(clonedRequest);
        } else {
            return next.handle(request);
        }
    }
}
