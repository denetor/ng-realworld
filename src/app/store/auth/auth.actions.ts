import {createAction, props} from '@ngrx/store';
import {LoginDto, LoginResponseDto} from './login.model';


export const authenticate = createAction(
    '[auth] authenticate',
    props<LoginDto>()
);
export const authenticateSuccess = createAction(
    '[auth] authenticate success',
    (loginResponseDto: LoginResponseDto) => ({payload: loginResponseDto})
);
