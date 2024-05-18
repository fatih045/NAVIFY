import {Component, OnInit} from '@angular/core';
import {UserAuthService} from "../../services/user-auth.service";
import {Locations} from "../../models/Locations";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{

  location:Locations
  ngOnInit(): void {
  }

  constructor(private httpPost:UserAuthService) {
    this.location = {locationName:"",locationAdress:"",latitude:0,longitude:0}
  }

  saveLocation(saveLocationForm:NgForm) {

    this.httpPost.createLocation(saveLocationForm.value).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }

}
