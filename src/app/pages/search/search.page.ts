import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { PostadsService } from 'src/app/_service/postads.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  city: any;
  areas: any;
  location: any;
  selectedLocation: any;
  searchArea: any;
  bedRoom: any;
  buildingType: any;
  RoomType: any;
  flatType: any;
  genderType: any;

  priceRange: any;

  selectedBuildingType: string = 'RoomMate'

  private geoCoder;
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
    constructor(public nav: NavController,private router: Router,  private _postadsService: PostadsService,
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,) {
   
    this.priceRange = { lower: 2000, upper: 20000 };
    this.bedRoom = [
      { val: 'Pepperoni', isChecked: true },
      { val: 'Sausage', isChecked: false },
      { val: 'Mushroom', isChecked: false }
    ];
    this.buildingType = [
      { val: 'Any', isChecked: true },
      { val: 'RoomMate', isChecked: false },
      { val: 'PG/Hostel', isChecked: false },
      { val: 'Flat/House', isChecked: false }
    ];
    this.RoomType = [
      { val: 'Single Room', isChecked: true },
      { val: '2 Sharing', isChecked: false },
      { val: '3 Sharing', isChecked: false },
      { val: '4 Sharing', isChecked: false }
    ];
    this.flatType = [
      { val: '1RK', isChecked: false },
      { val: '1BHK', isChecked: true },
      { val: '2BHK', isChecked: false },
      { val: '3BHK', isChecked: false },
      { val: '4BHK', isChecked: false },
      { val: '4BHK+', isChecked: false }
    ];
    this.genderType = [
      { val: 'Any', isChecked: true },
      { val: 'Male', isChecked: false },
      { val: 'Female', isChecked: false }
    ];
  }

  ngOnInit() {
    this.selectedLocation = "test"
    this.location = [{ id: 0, name: 'Tokai' },
    { id: 1, name: 'Tokaiq' }]
    this.findCities();
  }
  ionViewDidEnter() {

    this.mapsAPILoader.load().then(() => {
     // this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"],
        componentRestrictions: { 'country': 'IN' }
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }


        });
      });
    });
  }
  selectBedroom(data) {
    let update = this.bedRoom.filter(function (item) { return item.val == data.val })
    update[0].isChecked = !update[0].isChecked;
  }
  selectBuildingType(param) {
    this.buildingType.filter(function (item) { return item.val == param.val }).map(data => { data.isChecked = true, this.selectedBuildingType = data.val });
    this.buildingType.filter(function (item) { return item.val != param.val }).map(data => data.isChecked = false);
  }
  selectRoomType(data) {
    let update = this.RoomType.filter(function (item) { return item.val == data.val })
    update[0].isChecked = !update[0].isChecked;
  }
  selectFlatType(data) {
    let update = this.flatType.filter(function (item) { return item.val == data.val })
    update[0].isChecked = !update[0].isChecked;
  }
  selectGenderType(param) {
    let update = this.genderType.filter(function (item) { return item.val == param.val })
    update[0].isChecked = !update[0].isChecked;
    this.genderType.filter(function (item) { return item.val != param.val }).map(data => data.isChecked = false);
  }

  findCities(){
    this._postadsService.getCities()
    .subscribe(
      res =>{
        this.city = res;
        this._postadsService.getAreas()
        .subscribe(
          area =>{
            this.areas = area;
          })
      })
  }
  findAds() {
    let gender = this.genderType.filter(function (item) { return item.isChecked == true });
    if(gender[0].val === 'Any'){
      gender = ['Any','Male','Female'];
    }
    else{
      gender = gender[0].val;
    }
    let building = this.buildingType.filter(function (item) { return item.isChecked == true });
    if(building[0].val === 'Any'){
      building = ['RoomMate','PG/Hostel','Flat/House'];
    }
    else{
      building = building[0].val;
    }
    let room = this.RoomType.filter(function (item) { return item.isChecked == true }).map(data => { return data.val });
    let flat = this.flatType.filter(function (item) { return item.isChecked == true });
    let options = {
      location: this.location,
      searchArea: this.searchArea,
      apparttype: building,
      roomType: room,
      flatType: flat[0].val,
      gender: gender,
      rentAmount: this.priceRange
    };

    console.log(options);
 //   this.router.navigate(['path'])

    this._postadsService.searchAds(options)
    .subscribe(
      res =>{
      //  this.nav.navigateForward(['ads', JSON.stringify(res)]);
        let navigationExtras: NavigationExtras = { state: { id: res } };
        this.router.navigate(['ads'], navigationExtras);
      })
  
  }
}
