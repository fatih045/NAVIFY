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
import {DraggableDirectionsComponent} from "./draggable-directions/draggable-directions.component";
import {TripStopComponent} from "./Schedulers/trip-stop/trip-stop.component";
import {ConfigureTripComponent} from "./Schedulers/configure-trip/configure-trip.component";
import {LocationComponent} from "./Schedulers/location/location.component";


const routes:Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'favorites',component:FavoritesComponent},
  {path:'explore',component:ExploreComponent},
  {path:'account',component:AccountComponent},
  {path:'scheduler',component:SchedulerComponent},
  {path:'checkEmail/:userData',component:EmailcheckComponent},
  {path:'directions',component:DirectionpanelComponent},
  {path:'draggable',component:DraggableDirectionsComponent},
  {path:'tripStop',component:TripStopComponent},
  {path:'trip',component:ConfigureTripComponent},
  {path:'location',component:LocationComponent},





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
