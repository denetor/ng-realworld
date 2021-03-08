import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.module';
import {Observable} from 'rxjs';
import {usersGetAll} from '../../../store/users/users.actions';
import {UsersState} from '../../../store/users/users.reducer';

@Component({
  selector: 'app-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.sass']
})
export class AdminUsersComponent implements OnInit, OnDestroy {
    users$: Observable<UsersState>;
    // table data
    table = {
        columns: ['name', 'lastName', 'email', 'actions'],
    };

    constructor(
        private store: Store<AppState>,
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

}
