import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthEffects {
    authenticate$ = createEffect(() => this.actions$.pipe(
        ofType('[auth] authenticate'),
        mergeMap((action) => this.authService.authenticate(action)
            .pipe(
                map(authResponse => {
                    console.log('AuthEffects.authenticate authResponse:');
                    console.log({authResponse});
                    return {type: '[auth] authenticate success', payload: authResponse};
                }),
                catchError(() => EMPTY)
            )
        ))
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}
}
