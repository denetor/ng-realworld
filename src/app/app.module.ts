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
import * as fromAuth from './store/auth/auth.reducer';
import * as fromUsers from './store/users/users.reducer';
import {AuthEffects} from './store/auth/auth.effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './core/interceptors/auth.interceptor';
import {authReducer} from './store/auth/auth.reducer';
import {usersReducer} from './store/users/users.reducer';
import {UsersEffects} from './store/users/users.effects';


export interface AppState {
    auth: fromAuth.AuthState;
    users: fromUsers.UsersState;
}


export const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
    users: usersReducer,
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
        EffectsModule.forRoot([AuthEffects, UsersEffects]),
        MatSidenavModule,
        MatCheckboxModule,
        FormsModule,
        NavbarModule,
        SidemenuModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
