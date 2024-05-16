
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { TripStop } from "../../models/TripStop";
import { UserAuthService } from "../../services/user-auth.service";

@Component({
  selector: 'app-trip-stop',
  templateUrl: './trip-stop.component.html',
  styleUrls: ['./trip-stop.component.css']
})
export class TripStopComponent implements OnInit {
  tripStop: TripStop;

  constructor(private httpPost: UserAuthService) {
    // TripStop nesnesini tip belirterek başlatma
    this.tripStop = { stopName: "", stopDescription: "", locationId: 0, priority: 0, tripId: 0, arriveTime: new Date() };
  }

  ngOnInit(): void { }

  saveTripStop(saveStopForm: NgForm) {
    if (saveStopForm.invalid) {
      // Form geçersizse bir şey yapma
      return;
    }

    // Formdan alınan değerleri TripStop nesnesine dönüştürme
    const tripStop: TripStop = {
      stopName: saveStopForm.value.stopName,
      stopDescription: saveStopForm.value.stopDescription,
      locationId: +saveStopForm.value.locationId, // + işareti stringi number'a dönüştürür
      priority: +saveStopForm.value.priority, // + işareti stringi number'a dönüştürür
      tripId: +saveStopForm.value.tripId, // + işareti stringi number'a dönüştürür
      arriveTime: new Date(saveStopForm.value.arriveTime) // Gelen tarih stringini Date nesnesine dönüştürme
    };

    // TripStop'u kaydetme
    this.httpPost.createTripStop(tripStop)
      .subscribe(
        response => {
          // Başarılı bir şekilde kaydedildiyse, burada bir işlem yapabilirsiniz
          console.log('TripStop başarıyla kaydedildi:', response);
        },
        error => {
          // Hata durumunda, kullanıcıya bilgi vermek veya başka bir işlem yapmak için buraya kod ekleyebilirsiniz
          console.error('TripStop kaydedilirken bir hata oluştu:', error);
          console.log(tripStop); // TripStop nesnesini kontrol etmek için
        }
      );
  }
}
