import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminUsersComponent} from './users/admin-users.component';
import {CreateUserComponent} from './users/create-user/create-user.component';

const routes = [
    {path: '', component: AdminComponent, pathMatch: 'full'},
    {path: 'users', component: AdminUsersComponent, pathMatch: 'full'},
    {path: 'users/create', component: CreateUserComponent, pathMatch: 'full'},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
