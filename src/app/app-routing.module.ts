import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {ExploreComponent} from "./explore/explore.component";
import {AccountComponent} from "./account/account.component";
import {SchedulerComponent} from "./Schedulers/scheduler/scheduler.component";
import {EmailcheckComponent} from "./emailcheck/emailcheck.component";
import {DirectionpanelComponent} from "./directionpanel/directionpanel.component";



const routes:Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'favorites',component:FavoritesComponent},
  {path:'explore',component:ExploreComponent},
  {path:'account',component:AccountComponent},
  {path:'scheduler',component:SchedulerComponent},
  {path:'checkEmail',component:EmailcheckComponent},
  {path:'directions',component:DirectionpanelComponent},





];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
