import {Component, OnInit} from '@angular/core';

declare global {
  interface Window {
    initMap: () => void;
  }
}



@Component({
  selector: 'app-directionpanel',
  templateUrl: './directionpanel.component.html',
  styleUrls: ['./directionpanel.component.css']
})
export class DirectionpanelComponent implements OnInit{
  ngOnInit(): void {
    window.initMap();
  }

}


function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      mapTypeControl: false,
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
    }
  );

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    panel: document.getElementById("directions-panel") as HTMLElement
  });

  const originInput = document.getElementById(
    "origin-input"
  ) as HTMLInputElement;
  const destinationInput = document.getElementById(
    "destination-input"
  ) as HTMLInputElement;

  // Otomatik doldurma için yer seçici alanları oluşturun
  const originAutocomplete = new google.maps.places.Autocomplete(
    originInput,
    { types: ['geocode'] } // Yer adlarını ve koordinatları içeren türleri belirtin
  );

  const destinationAutocomplete = new google.maps.places.Autocomplete(
    destinationInput,
    { types: ['geocode'] }
  );

  // Rota hesapla ve göster işlevini tanımlayın
  const calculateAndDisplayRoute = function () {
    const origin = originInput.value;
    const destination = destinationInput.value;

    directionsService.route(
      {
        origin: { query: origin },
        destination: { query: destination },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };

  // Otomatik doldurma özelliği için giriş alanlarının 'place_changed' olayını dinleyin
  originAutocomplete.addListener('place_changed', calculateAndDisplayRoute);
  destinationAutocomplete.addListener('place_changed', calculateAndDisplayRoute);

  // Harita üzerinde submit butonuna tıklandığında rota hesaplayın
  document.getElementById("submit")?.addEventListener("click", calculateAndDisplayRoute);
}

window.initMap = initMap;

