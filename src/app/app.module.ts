import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { MainPageComponent } from './main-page/main-page.component';
import { AccountComponent } from './account/account.component';
import { ExploreComponent } from './explore/explore.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EmailcheckComponent } from './emailcheck/emailcheck.component';
import { DirectionpanelComponent } from './directionpanel/directionpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    AccountComponent,
    ExploreComponent,
    SchedulerComponent,
    FavoritesComponent,
    EmailcheckComponent,
    DirectionpanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
