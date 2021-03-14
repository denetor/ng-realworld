import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {usersCreateFailure, usersCreateSuccess, usersGetAll, usersGetAllSuccess} from './users.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UsersService} from './users.service';
import {EMPTY, of} from 'rxjs';
import {UserDto} from './user.model';

@Injectable()
export class UsersEffects {

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType('[users]getAll'),
        mergeMap((action) => this.usersService.getAll()
            .pipe(
                map((users: UserDto[]) => {
                    // return of(usersGetAllSuccess(users));
                    return {type: '[users]getAll.success', payload: users};
                }),
                catchError(() => EMPTY)
            )
        ))
    );

    create$ = createEffect(() => this.actions$.pipe(
        ofType('[users]create'),
            mergeMap((action) => {
                return this.usersService.insert(action)
                    .pipe(
                        map((user: UserDto) => {
                            return usersCreateSuccess(user);
                        }),
                        catchError((error) => {
                            return of(usersCreateFailure());
                        })
                    );
                }
            )
        )
    );


    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) {}
}
