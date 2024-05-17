import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {map} from "rxjs";
import {Email} from "../models/email";
import {TripStop} from "../models/TripStop";
import {Trip} from "../models/trip";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor( private HttpClient: HttpClient) { }


 createUser(user:User){


    return this.HttpClient.post<any>("https://softwareproject.azurewebsites.net/api/Account/register",user)




 }


 confirmEmail(email:Email){
    const userId = email.userId
    const code = email.code
   return this.HttpClient.post<Email>(`https://softwareproject.azurewebsites.net/api/Account/confirm-email?userID=${email.userId}&code=${email.code}`, email);


 }



// Sınıfınızın içindeki metot
  createTripStop(tripStop: TripStop) {
    // API sürümü, örneğin 1.0, 1.1, gibi bir sürüm belirtmeniz gerekiyor
    const version = '1.0'; // Örneğin

    // URL'nin doğru bir şekilde oluşturulması
    const url = `https://softwareproject.azurewebsites.net/api/v${version}/Stop`;

    // HttpClient.post metodu kullanarak HTTP POST isteğinin gönderilmesi
    return this.HttpClient.post<TripStop>(url, tripStop);
  }

  createTrip(trip: Trip) {
    const version = '1.0';
    const url = `https://softwareproject.azurewebsites.net/api/v${version}/Trip`;
    return this.HttpClient.post<Trip>(url, trip);
  }


}
