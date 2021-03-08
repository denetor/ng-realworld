import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {usersGetAll, usersGetAllSuccess} from './users.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UsersService} from './users.service';
import {EMPTY} from 'rxjs';

@Injectable()
export class UsersEffects {

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType('[users]getAll'),
        mergeMap((action) => this.usersService.getAll()
            .pipe(
                map(response => {
                    console.log('UsersEffects.[users]getAll response:');
                    console.log({response});
                    return {type: '[users]getAll.success', payload: response};
                }),
                catchError(() => EMPTY)
            )
        ))
    );


    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) {}
}
