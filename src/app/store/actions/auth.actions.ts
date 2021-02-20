import {createAction, props} from '@ngrx/store';
import {LoginDto} from '../models/login.model';
import {AuthState} from '../reducers/auth.reducer';


export const authenticate = createAction(
    '[auth] authenticate',
    props<LoginDto>()
);
export const authenticateSuccess = createAction(
    '[auth] authenticate success',
    (authState: AuthState) => ({payload: authState})
);
