import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostadsService } from 'src/app/_service/postads.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';

// import { LocationService } from 'src/app/_service';
declare var google;


@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.page.html',
  styleUrls: ['./rent-details.page.scss'],
})
export class RentDetailsPage implements OnInit {
  adrent: FormGroup;
  //loading = false;
  submitted = false;
  adsId = '';
  address: string;
  state: string;
  city: string;
  pincode: number;
  latitude: number;
  longitude: number;
  landmark: string;

  constructor(
    private formBuilder: FormBuilder,
    private _postadsService: PostadsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.adrent = this.formBuilder.group({
  
      // address: ['', Validators.required],
      // state: ['', Validators.required],
      // city: ['', Validators.required],
      // pincode: ['', Validators.required],
      // landmark: ['', Validators.required],
      // latitude: ['', Validators.required],
      // longitude: ['', Validators.required],


      rentAmount: ['', Validators.required],
      depositAmount: ['', Validators.required],
      rentNegotiable: [true, Validators.required],


    });
    this.route.params.subscribe(params => this.adsId = params.id);
    if (this.adsId) {
      this._postadsService.getAdsDetails(this.adsId)
        .subscribe(
          res => {
            this.setFormControlValues(res);
          })

    }

  }
  get f() {
    return this.adrent.controls;
  }

  onSubmit() {
    this.submitted = true;
    debugger
    // if (this.amenitiesDetail.invalid) {
    //   return;
    // }
    //  console.log(this.amenitiesDetail.value);
    this._postadsService.updateRent(this.adsId, this.adrent.value)
      //  .pipe(first())
      .subscribe(
        data => {
          // this.registerVillageForm.value.id = this.localUserData.length ? Math.max(...this.localUserData.map(x => x.id)) + 1 : 1;
          // this.localUserData.push(this.registerVillageForm.value);
          // this.localUserData.userState= this.registerVillageForm.value.userState
          // this.localUserData.userDivision= this.registerVillageForm.value.userDivision
          // this.localUserData.userDistrict= this.registerVillageForm.value.userDistrict;
          // this.localUserData.userZone= this.registerVillageForm.value.userZone;
          // this.localUserData.userGrampanchayat= this.registerVillageForm.value.userGrampanchayat;
          // localStorage.setItem('smartvillageusers', JSON.stringify(this.localUserData));
          // this.alertService.success('State Registration successful', true);
          // this.router.navigate(['/home']);
          this.router.navigate(['/address', this.adsId]);
          // this.router.navigate(['/amenities', this.adsId]);
          console.log(data);
        },
        error => {
          //  this.alertService.error(error);
          //  this.loading = false;
        });


  }

  setFormControlValues(adsData: any) {
    this.adrent.get('rentAmount').setValue(adsData.rentAmount);
    this.adrent.get('depositAmount').setValue(adsData.depositAmount);

      // address: ['', Validators.required],
      // state: ['', Validators.required],
      // city: ['', Validators.required],
      // pincode: ['', Validators.required],
      // landmark: ['', Validators.required],
      // latitude: ['', Validators.required],
      // longitude: ['', Validators.required],

      this.address = adsData.address;
      this.state = adsData.state;
      this.city = adsData.city;
      this.pincode = adsData.pincode;
      this.landmark = adsData.landmark;
   

  }



}
