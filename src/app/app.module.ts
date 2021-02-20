import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './core/navbar/navbar.module';
import { SidemenuModule } from './core/sidemenu/sidemenu.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import * as fromAuth from './store/reducers/auth.reducer';
import {authReducer} from './store/reducers/auth.reducer';
import {AuthEffects} from './store/effects/auth.effects';
import {HttpClientModule} from '@angular/common/http';


export interface AppState {
    auth: fromAuth.AuthState;
}


export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([AuthEffects]),
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
