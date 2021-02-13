import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeIndexComponent} from './index/welcome-index.component';

const routes = [
    {path: '', component: WelcomeIndexComponent, pathMatch: 'full'}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WelcomeRoutingModule { }
