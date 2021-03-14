import {createReducer, on} from '@ngrx/store';
import {authenticate, authenticateSuccess, logout, readCurrentUser, readCurrentUserSuccess} from './auth.actions';
import {UserDto} from '../users/user.model';

export interface AuthState {
    accessToken: string | null;
    user: UserDto | null;
}

const initialState: AuthState = {
    accessToken: null,
    user: null,
};

export const authReducer = createReducer(
    initialState,
    on(authenticate, (state: AuthState, action) => {
        return state;
    }),
    on(authenticateSuccess, (state: AuthState, action) => {
        const newState = {
            accessToken: action && action.payload && action.payload.access_token ? action.payload.access_token : null,
            user: null,
        };
        // save accessToken in localStorage
        localStorage.setItem('access_token', newState.accessToken);
        return newState;
    }),
    on(readCurrentUser, (state: AuthState, action) => {
        return state;
    }),
    on(readCurrentUserSuccess, (state: AuthState, action) => {
        const newState = {...state, user: action.payload};
        return newState;
    }),
    on(logout, (state: AuthState, action) => {
        localStorage.removeItem('access_token');
        return initialState;
    })
);
