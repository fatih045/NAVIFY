//
// import { Component, OnInit } from '@angular/core';
//
// declare global {
//   interface Window {
//     initMapDraggable: () => void;
//   }
// }
//
// @Component({
//   selector: 'app-draggable-directions',
//   templateUrl: './draggable-directions.component.html',
//   styleUrls: ['./draggable-directions.component.css']
// })
// export class DraggableDirectionsComponent implements OnInit {
//   ngOnInit(): void {
//     // `window.initMapDraggable()`'yi sayfa yüklenince çağırıyoruz.
//     if (typeof window.initMapDraggable === 'function') {
//       window.initMapDraggable();
//     } else {
//       console.error("initMapDraggable fonksiyonu bulunamadı.");
//     }
//   }
// }
//
// function initMapDraggable(): void {
//   const mapElement = document.getElementById("draggable-map");
//   const panelElement = document.getElementById("draggable-panel");
//   const totalDistanceElement = document.getElementById("total-distance");
//
//   // Map elemanını kontrol edin ve null olup olmadığını kontrol edin.
//   if (!mapElement) {
//     console.error('draggable-map elementi bulunamadı.');
//     return;
//   }
//
//   // Google Haritası oluşturun
//   const map = new google.maps.Map(mapElement as HTMLElement, {
//     zoom: 4,
//     center: { lat: 36.89, lng: 30.64 }, // Australia.
//   });
//
//   const directionsService = new google.maps.DirectionsService();
//   const directionsRenderer = new google.maps.DirectionsRenderer({
//     draggable: true,
//     map,
//     panel: panelElement as HTMLElement,
//   });
//
//   // Directions değiştiğinde toplam mesafeyi hesaplayın.
//   directionsRenderer.addListener("directions_changed", () => {
//     const directions = directionsRenderer.getDirections();
//
//     if (directions) {
//       computeTotalDistance(directions, totalDistanceElement as HTMLElement);
//     }
//   });
//
//   // Rotaları gösterin
//   displayRouteDraggable(
//     "Antalya",
//     "İstanbul",
//     directionsService,
//     directionsRenderer
//   );
// }
//
// function displayRouteDraggable(
//   origin: string,
//   destination: string,
//   service: google.maps.DirectionsService,
//   display: google.maps.DirectionsRenderer
// ): void {
//   service.route({
//     origin,
//     destination,
//     waypoints: [
//       { location: "Mersin" },
//       { location: "Ankara" },
//     ],
//     travelMode: google.maps.TravelMode.DRIVING,
//     avoidTolls: true,
//   }).then((result: google.maps.DirectionsResult) => {
//     display.setDirections(result);
//   }).catch((e) => {
//     alert("Yönleri gösteremedi: " + e);
//   });
// }
//
// function computeTotalDistance(
//   result: google.maps.DirectionsResult,
//   totalDistanceElement: HTMLElement
// ): void {
//   let total = 0;
//   const route = result.routes[0];
//
//   if (!route) {
//     return;
//   }
//
//   for (const leg of route.legs) {
//     total += leg.distance?.value || 0;
//   }
//
//   // Toplam mesafeyi kilometreye dönüştürüp `total-distance` elementine ayarlayın.
//   total = total / 1000;
//   totalDistanceElement.innerHTML = `${total.toFixed(2)} km`;
// }
//
// // `window` objesine `initMapDraggable` fonksiyonunu atayın.
// window.initMapDraggable = initMapDraggable;
import { Component, OnInit } from '@angular/core';

declare global {
  interface Window {
    initMapDraggable: () => void;
  }
}

@Component({
  selector: 'app-draggable-directions',
  templateUrl: './draggable-directions.component.html',
  styleUrls: ['./draggable-directions.component.css']
})
export class DraggableDirectionsComponent implements OnInit {
  origin = '';
  destination = '';
  waypoints = '';

  ngOnInit(): void {
    if (typeof window.initMapDraggable === 'function') {
      window.initMapDraggable();
    } else {
      console.error("initMapDraggable fonksiyonu bulunamadı.");
    }
  }

  calculateRoute(): void {
    const waypointList = this.waypoints.split(',').map(w => w.trim()).filter(Boolean);
    initMapDraggable(this.origin, this.destination, waypointList);
  }
}

function initMapDraggable(origin = 'Antalya', destination = 'İstanbul', waypoints: string[] = []): void {
  const mapElement = document.getElementById("draggable-map");
  const panelElement = document.getElementById("draggable-panel");
  const totalDistanceElement = document.getElementById("total-distance");

  if (!mapElement) {
    console.error('draggable-map elementi bulunamadı.');
    return;
  }

  const map = new google.maps.Map(mapElement as HTMLElement, {
    zoom: 4,
    center: { lat: 36.89, lng: 30.64 }, // Antalya
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    panel: panelElement as HTMLElement,
  });

  directionsRenderer.addListener("directions_changed", () => {
    const directions = directionsRenderer.getDirections();

    if (directions) {
      computeTotalDistance(directions, totalDistanceElement as HTMLElement);
    }
  });

  displayRouteDraggable(
    origin,
    destination,
    directionsService,
    directionsRenderer,
    waypoints
  );
}

function displayRouteDraggable(
  origin: string,
  destination: string,
  service: google.maps.DirectionsService,
  display: google.maps.DirectionsRenderer,
  waypoints: string[]
): void {
  const waypointsArray = waypoints.map(location => ({
    location,
    stopover: true
  }));

  service.route({
    origin,
    destination,
    waypoints: waypointsArray,
    travelMode: google.maps.TravelMode.DRIVING,
    avoidTolls: true,
  }).then((result: google.maps.DirectionsResult) => {
    display.setDirections(result);
  }).catch((e: any) => {
    alert("Yönleri gösteremedi: " + e);
  });
}

function computeTotalDistance(
  result: google.maps.DirectionsResult,
  totalDistanceElement: HTMLElement
): void {
  let total = 0;
  const route = result.routes[0];

  if (!route) {
    return;
  }

  for (const leg of route.legs) {
    total += leg.distance?.value || 0;
  }

  total = total / 1000;
  totalDistanceElement.innerHTML = `${total.toFixed(2)} km`;
}

window.initMapDraggable = initMapDraggable;
