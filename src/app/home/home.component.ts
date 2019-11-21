import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, Platform } from '@ionic/angular';
import { LocationService } from '../_service/location.service';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

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

}
