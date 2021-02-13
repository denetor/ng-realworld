import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeIndexComponent } from './index/welcome-index.component';
import {WelcomeRoutingModule} from './welcome-routing.module';



@NgModule({
    declarations: [WelcomeIndexComponent],
    imports: [
        CommonModule,
        WelcomeRoutingModule,
    ]
})
export class WelcomeModule { }
