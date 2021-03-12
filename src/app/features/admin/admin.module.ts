import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatCardModule} from '@angular/material/card';
import { AdminUsersComponent } from './users/admin-users.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UsersTableComponent } from './users/components/users-table/users-table.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
    declarations: [AdminComponent, AdminUsersComponent, UsersTableComponent, CreateUserComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class AdminModule { }
