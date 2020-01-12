import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, Platform } from '@ionic/angular';
// import { LocationService } from '../_service/location.service';
import { MapsAPILoader } from '@agm/core';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{

  //  @ViewChild('map', {static: false}) mapElement: ElementRef;

  //   @ViewChild('pleaseConnect', {static: false}) pleaseConnect: ElementRef;
  //   map:any;
  //   nearByCentres:any = [];
  //   pincode:any;
  //   addr_components:any;


  // apiKey = 'AIzaSyBvLeUvXOW-2dTNPn9c9bwhtx9giHrWLEg';
  @ViewChild('map', { static: false }) googleMap;
  mapElement: any;
  map: any;
  apiResponse: any;
  eventResponse: any;
  mapOptions: any;
  mapCenter = { lat: null, lng: null };
  markerOptions: any = { position: null, map: null, title: null };
  marker: any;

  latitude: number;
  longitude: number;
  zoom:number;
  address: string;
  private geoCoder;

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(
    // public http:HttpClient,
    public navCtrl: NavController,
    public platform: Platform,
    // private location: LocationService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ionViewDidEnter() {
    // this.location.getUserPosition().then((pos) => {
    //   debugger
    //   console.log('pos', pos);
    //   this.apiResponse = pos;
    //   // const latitude = this.apiResponse.coords.latitude;
    //   // const longitude = this.apiResponse.coords.longitude;

    //   this.mapCenter.lat = this.apiResponse.coords.latitude;
    //   this.mapCenter.lng = this.apiResponse.coords.longitude;
    //   // this.getCentersNearby();
    //   this.loadMap();
    // })
    //   .catch((e) => {
    //     console.log('e', e);
    //   });

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"],
        componentRestrictions:{'country':'IN'}
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 18;
          this.getAddress(this.latitude, this.longitude);

        });
      });
    });
  }
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 18;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
 
 
  markerDragEnd($event: MouseEvent) {
    //console.log($event);
    this.searchElementRef.nativeElement.value="";
    this.eventResponse = $event;
    this.latitude = this.eventResponse.coords.lat;
    this.longitude = this.eventResponse.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
  mapDragEnd($event:MouseEvent){
    console.log($event);
  }
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 18;
          this.address = results[0].formatted_address;
          this.searchElementRef.nativeElement.value=results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
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
      console.log(this.marker.getPosition().lng())
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
