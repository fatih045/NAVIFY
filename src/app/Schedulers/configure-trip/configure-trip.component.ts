import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {Trip} from "../../models/trip";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-configure-trip',
  templateUrl: './configure-trip.component.html',
  styleUrls: ['./configure-trip.component.css']
})
export class ConfigureTripComponent implements OnInit{

  trip:Trip
  ngOnInit(): void {
  }


  constructor(private httpPost:UserAuthService) {
    this.trip = {tripName:"",tripDescription:"",tripStartTime:new Date(),isFavourite:false}
  }


  saveTrip(saveTripForm:NgForm){ {
    this.httpPost.createTrip(this.trip)
      .subscribe(
        response => {
          console.log('Trip oluşturuldu:', response);
        },
        error => {
          console.error('Trip oluşturulurken bir hata oluştu:', error);
        }
      );
  }

}

}
