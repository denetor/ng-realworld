import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardUserComponent} from './user/dashboard-user.component';

const routes = [
    {path: '', component: DashboardUserComponent, pathMatch: 'full'},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
