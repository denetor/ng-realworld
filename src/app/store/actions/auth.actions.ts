import {createAction, props} from '@ngrx/store';
import {LoginDto, LoginResponseDto} from '../models/login.model';


export const authenticate = createAction(
    '[auth] authenticate',
    props<LoginDto>()
);
export const authenticateSuccess = createAction(
    '[auth] authenticate success',
    (loginResponseDto: LoginResponseDto) => ({payload: loginResponseDto})
);
