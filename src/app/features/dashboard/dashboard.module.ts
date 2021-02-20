import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './user/dashboard-user.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
    declarations: [DashboardUserComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatTabsModule,
    ]
})
export class DashboardModule { }
