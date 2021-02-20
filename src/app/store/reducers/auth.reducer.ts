import {createReducer, on} from '@ngrx/store';
import {authenticate, authenticateSuccess} from '../actions/auth.actions';

export interface AuthState {
    access_token: string | null;
    currentUser: any | null;
}

const initialState: AuthState = {
    access_token: null,
    currentUser: null,
};

export const authReducer = createReducer(
    initialState,
    on(authenticate, (state: AuthState, action) => {
        console.log('authReducer.authenticate');
        console.log({state, action});
        return state;
    }),
    on(authenticateSuccess, (state: AuthState, action) => {
        console.log('authReducer.authenticateSuccess');
        console.log({state, action});
        return action.payload;
    }),
);
