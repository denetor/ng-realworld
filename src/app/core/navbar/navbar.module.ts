import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [NavbarComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        FontAwesomeModule
    ],
    exports: [NavbarComponent]
})
export class NavbarModule { }
