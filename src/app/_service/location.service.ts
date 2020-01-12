// import { Injectable } from '@angular/core';
// import { Geolocation,GeolocationOptions,Geoposition, PositionError } from '@ionic-native/geolocation/ngx';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocationService {
//   options:GeolocationOptions;
//   currentPos:Geoposition;
//   success:any;
//   apiKey = 'AIzaSyBvLeUvXOW-2dTNPn9c9bwhtx9giHrWLEg';

//   constructor(
//     private geolocation:Geolocation

//   ) { 
//     const script = document.createElement('script');
//     script.id = 'googleMap';
//     if (this.apiKey) {
//      // script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
//     //  script.src = 'https://maps.googleapis.com/maps/api/js?sensor=true&libraries=geometry&key=AIzaSyBpgrRfOz7N_JkqZ7oOjBcaACaeS6UQmfU';
//      script.src = 'https://maps.google.com/maps/api/js?v=3.exp&libraries=places,geometry&key=AIzaSyAWasxIddWK4mSe7YBixfrsuAiwDhxVQEs';
//     } else {
//         script.src = 'https://maps.googleapis.com/maps/api/js?sensor=false&libraries=geometry&key=';
//         //https://maps.googleapis.com/maps/api/geocode/json?latlng=21.2228306,79.6521402&key=AIzaSyAWasxIddWK4mSe7YBixfrsuAiwDhxVQEs
//     }
//     document.head.appendChild(script);
//   }

//   getUserPosition(){
//     return new Promise((resolve,reject) => {
//       this.options ={
//         enableHighAccuracy:true
//       };

//       this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) =>{
//         this.currentPos = pos;
//         console.log(pos);
//         resolve(pos);
//       },(err:PositionError)=> {
//         console.log("error : "+err.message);
//         reject(err.message);
//       });
//     });
//   }
// }
