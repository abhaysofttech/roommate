import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, Platform } from '@ionic/angular';
import { LocationService } from 'src/app/_service';
// import { LocationService } from '../_service/location.service';
declare var google;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {

  //  @ViewChild('map', {static: false}) mapElement: ElementRef;

  //   @ViewChild('pleaseConnect', {static: false}) pleaseConnect: ElementRef;
  //   map:any;
  //   nearByCentres:any = [];
  //   pincode:any;
  //   addr_components:any;


  apiKey = 'AIzaSyBvLeUvXOW-2dTNPn9c9bwhtx9giHrWLEg';
  @ViewChild('map', { static: false }) googleMap;
  mapElement: any;
  map: any;
  apiResponse: any;
  mapOptions: any;
  mapCenter = { lat: null, lng: null };
  markerOptions: any = { position: null, map: null, title: null };
  marker: any;
  constructor(
    // public http:HttpClient,
    public navCtrl: NavController,
    public platform: Platform,
    private location: LocationService,
  ) { }

  ionViewDidEnter() {
    this.location.getUserPosition().then((pos) => {
      console.log('pos', pos);
      this.apiResponse = pos;
      // const latitude = this.apiResponse.coords.latitude;
      // const longitude = this.apiResponse.coords.longitude;

      this.mapCenter.lat = this.apiResponse.coords.latitude;
      this.mapCenter.lng = this.apiResponse.coords.longitude;
      // this.getCentersNearby();
      this.loadMap();
      this.getLocation();
    })
      .catch((e) => {
        console.log('e', e);
      });
  }

  loadMap() {
    // // debugger
    // let latLng = new google.map.LatLng(latitude, longitude);

    // let mapOptions = {
    //   center:latLng,
    //   disableDefaultUI: true,
    //   zoom:10,
    //   mapTypeId: google.map.mapTypeId.ROADMAP
    // }

    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.mapElement = this.googleMap.nativeElement;
    this.mapOptions = {
      center: this.mapCenter,
      zoom: 18
    };

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapElement, this.mapOptions);

      this.markerOptions.position = new google.maps.LatLng(this.mapCenter.lat, this.mapCenter.lng);
      this.markerOptions.map = this.map;
      this.markerOptions.title = 'My Location';
      this.marker = new google.maps.Marker(this.markerOptions);

    }, 2000);

  }

  addMarkersToMap(centers) {
    console.log(centers.length, centers, 'get markers called');
    var position = new google.maps.LatLng(centers.latitude, centers.longitude);
    var centerMarker = new google.maps.Marker({ position: position, title: centers.centerName })
    centerMarker.setMap(this.map);
    google.map.event.addListner(centerMarker, 'click', function () {
      var infowindow = new google.maps.Infowindow({
        content: `<b>${centers.centerName}<b><br>${centers.centerAddress}`,
        position: position,
      });
      infowindow.open(this.map);
    });
  }


  //calculates distance between two points in km's ***********************
  calcDistance(p1, p2):any {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
  }
  distance(lat1, lon1, lat2, lon2, unit):any {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }
  getPosition(position) {
    var userPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    let data = [{
      "code": "0001",
      "lat": "18.54967",
      "lng": "73.941942",
      "location": "Stop 1"
  }, {
      "code": "0002",
      "lat": "18.549546",
      "lng": "73.942855",
      "location": "Stop 2"
  }, {
      "code": "0002",
      "lat": "18.559307",
      "lng": "73.907586",
      "location": "Stop 3"
  }];
  
  for (var i = 0; i < data.length; i++) {
    // if this location is within 0.1KM of the user, add it to the list
    if (this.distance(parseFloat(userPosition.lat), parseFloat(userPosition.lng), data[i].lat, data[i].lng, "K") <= 0.8) {
        // html += '<p>' + data[i].location + ' - ' + data[i].code + '</p>';
        console.log("location is nearest to us *********" + data[i].location + ' - ' + data[i].code)
    }
}

    for (var i = 0; i < data.length; i++) {

      var p1 = new google.maps.LatLng(parseFloat(userPosition.lat), parseFloat(userPosition.lng));
      var p2 = new google.maps.LatLng(parseFloat(data[i].lat), parseFloat(data[i].lng));

      var distance = this.calcDistance(p1, p2) * 1000;

      if ((distance * 1000) <= 800) {
        // html += '<p>' + data[i].location + ' - ' + data[i].code + '</p>';
        // $('#nearbystops').append(html);
        console.log("location is nearest to us *********" + data[i].location + ' - ' + data[i].code)
      }

    }
  }

  // get user's current latitude & longitude
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }


}
