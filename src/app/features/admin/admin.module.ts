import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatCardModule,
    ]
})
export class AdminModule { }
