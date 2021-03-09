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



@NgModule({
    declarations: [AdminComponent, AdminUsersComponent, UsersTableComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class AdminModule { }
