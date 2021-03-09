import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersState} from '../../../../../store/users/users.reducer';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass']
})
export class UsersTableComponent implements OnInit {
    @Input()
    dataSource$: Observable<UsersState>;
    table = {
        columns: ['name', 'lastName', 'email', 'actions'],
    };

    constructor() { }

    ngOnInit(): void {
    }

}
