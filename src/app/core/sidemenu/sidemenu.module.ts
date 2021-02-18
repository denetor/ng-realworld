import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
    declarations: [SidemenuComponent],
    exports: [
        SidemenuComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
    ]
})
export class SidemenuModule { }
