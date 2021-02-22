import {createReducer, on} from '@ngrx/store';
import {authenticate, authenticateSuccess, readCurrentUser, readCurrentUserSuccess} from './auth.actions';

export interface AuthState {
    accessToken: string | null;
    user: any | null;
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
        // console.log('authReducer.authenticateSuccess');
        // console.log({state, action});
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
        console.log('on readCurrentUserSuccess');
        console.log({state, action});
        const newState = {...state, user: action.payload};
        console.log({newState});
        return newState;
    }),
);
