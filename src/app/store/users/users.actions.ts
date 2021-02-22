import {createAction, props} from '@ngrx/store';
import {LoginResponseDto} from '../auth/login.model';
import {UserDto} from './user.model';


// user has been authenticated, read user's details
export const authenticate = createAction(
    '[users] authenticate',
    props<LoginResponseDto>()
);
export const authenticateSuccess = createAction(
    '[users] authenticate success',
    (userDto: UserDto) => ({payload: userDto})
);
