import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [SidemenuComponent],
    exports: [
        SidemenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
    ]
})
export class SidemenuModule { }
