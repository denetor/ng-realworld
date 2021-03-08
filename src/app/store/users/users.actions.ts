import {createAction, props} from '@ngrx/store';
import {LoginDto, LoginResponseDto} from '../auth/login.model';
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
export const usersGetAll = createAction(
    '[users]getAll'
);
export const usersGetAllSuccess = createAction(
    '[users]getAll.success',
    (users: UserDto[]) => ({payload: users})
);
export const usersGetAllFailure = createAction(
    '[users]getAll.failure'
);
