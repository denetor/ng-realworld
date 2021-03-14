import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {AuthService} from './auth.service';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private usersService: UsersService
    ) {}

    authenticate$ = createEffect(() => this.actions$.pipe(
        ofType('[auth] authenticate'),
        mergeMap((action) => this.authService.authenticate(action)
            .pipe(
                // https://stackoverflow.com/questions/55314049/how-to-dispatch-multiple-actions-from-ngrx-7-effects?rq=1
                switchMap(authResponse => [
                    {type: '[auth] authenticate success', payload: authResponse},
                    {type: '[auth] readCurrentUser', payload: authResponse},
                ]),
                catchError(() => EMPTY)
            )
        ))
    );

    readCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType('[auth] readCurrentUser'),
        mergeMap((action) => this.usersService.getMyself()
            .pipe(
                map(response => {
                    return {type: '[auth] readCurrentUser success', payload: response};
                }),
                catchError(() => EMPTY)
            )
        ))
    );
}
