import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.module';
import {Observable} from 'rxjs';
import {usersGetAll} from '../../../store/users/users.actions';
import {UsersState} from '../../../store/users/users.reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.sass']
})
export class AdminUsersComponent implements OnInit, OnDestroy {
    users$: Observable<UsersState>;

    constructor(
        private store: Store<AppState>,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.users$ = this.store.select('users');
        this.users$.subscribe(
            data => {
                console.log(data);
            }
        );
        this.store.dispatch(usersGetAll());
    }

    ngOnDestroy(): void {
    }

    gotoCreateUser(): void {
        this.router.navigate(['admin', 'users', 'create']);
    }

}
