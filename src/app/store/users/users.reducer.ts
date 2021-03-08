import {UserDto} from './user.model';
import {createReducer, on} from '@ngrx/store';
import {usersGetAll, usersGetAllSuccess} from './users.actions';

export interface UsersState {
    items: UserDto[];
};

export const initialState: UsersState = {
    items: [],
};

export const usersReducer = createReducer(
    initialState,
    on(usersGetAll, (state: UsersState, action) => {
        console.log('usersReducer.on.usersGetAll');
        return state;
    }),
    on(usersGetAllSuccess, (state: UsersState, action) => {
        console.log('usersReducer.on.usersGetAllSuccess');
        console.log({state, action});
        return {...state, items: action.payload};
    })
);
