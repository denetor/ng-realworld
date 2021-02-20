import {createReducer, on} from '@ngrx/store';
import {authenticate, authenticateSuccess} from '../actions/auth.actions';

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
        console.log('authReducer.authenticate');
        console.log({state, action});
        return state;
    }),
    on(authenticateSuccess, (state: AuthState, action) => {
        console.log('authReducer.authenticateSuccess');
        console.log({state, action});
        const newState = {
            accessToken: action && action.payload && action.payload.access_token ? action.payload.access_token : null,
            user: null,
        };
        return newState;
    }),
);
