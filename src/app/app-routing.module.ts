import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {FavoritesComponent} from "./favorites/favorites.component";
import {ExploreComponent} from "./explore/explore.component";
import {AccountComponent} from "./account/account.component";
import {SchedulerComponent} from "./scheduler/scheduler.component";



const routes:Routes = [
  {path:'login',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'favorites',component:FavoritesComponent},
  {path:'explore',component:ExploreComponent},
  {path:'account',component:AccountComponent},
  {path:'scheduler',component:SchedulerComponent},




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
