import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu.component';



@NgModule({
    declarations: [SidemenuComponent],
    exports: [
        SidemenuComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SidemenuModule { }
