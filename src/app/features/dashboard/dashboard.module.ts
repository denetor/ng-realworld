import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './user/dashboard-user.component';
import {DashboardRoutingModule} from './dashboard-routing.module';



@NgModule({
    declarations: [DashboardUserComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
    ]
})
export class DashboardModule { }
