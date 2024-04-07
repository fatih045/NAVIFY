import { Component } from '@angular/core';
import {Trip} from "../models/trip";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

    protected readonly Component = Component;
  tripList : Trip[] =[];
}
