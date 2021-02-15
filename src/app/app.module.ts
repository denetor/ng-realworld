import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './core/navbar/navbar.module';
import { SidemenuModule } from './core/sidemenu/sidemenu.module';
import {MatSidenavHarness} from '@angular/material/sidenav/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatCheckboxModule,
        FormsModule,
        NavbarModule,
        SidemenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
