import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostadsService } from 'src/app/_service/postads.service';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.page.html',
  styleUrls: ['./amenities-details.page.scss'],
})
export class AmenitiesDetailsPage implements OnInit {
  amenitiesDetail: FormGroup;
  loading = false;
  submitted = false;
  adsId = '';

  public form = [
    { val: 'Air-Conditioner', id: 'airConditioner', isChecked: false },
    { val: 'Club', id: 'club', isChecked: false },
    { val: 'Playground', id: 'playground', isChecked: false },
    { val: 'Gas', id: 'gas', isChecked: false },
    { val: 'Sewage', id: 'sewage', isChecked: false },
    { val: 'Power backup', id: 'powerBackup', isChecked: false },
    { val: 'Lift', id: 'liftService', isChecked: false },
    { val: 'House keeper', id: 'houseKeeper', isChecked: false },
    { val: 'Security', id: 'security', isChecked: false },
    { val: 'Car Parking', id: 'carParking', isChecked: false },
    { val: 'Two-Wheeler Parking', id: 'twoWheelerParking', isChecked: false },
    { val: 'Swimming Pool', id: 'swimmingPool', isChecked: false },
    { val: 'Internet Connectivity', id: 'internetConnectivity', isChecked: false },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _postadsService: PostadsService,
  ) { }

  ngOnInit() {
    // this.amenitiesDetail = this.formBuilder.group({
    //   waterSupply: ['', Validators.required],
    //   appartType: ['', Validators.required],
    //   bhkType: ['', Validators.required],
    //   gatedSecurity: ['', Validators.required],
    //   vegNonveg: ['', Validators.required],
    //   bathroom: ['', Validators.required],
    //   balcony: ['', Validators.required],
    //   cupboard: ['', Validators.required],
    //   // otherAmeni: ['', Validators.required],

    // });
    this.route.params.subscribe(params => this.adsId = params.id);
  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // if (this.amenitiesDetail.invalid) {
    //   return;
    // }
    //  console.log(this.amenitiesDetail.value);
    this._postadsService.updateAmenities(this.adsId, this.form)
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
          this.router.navigate(['/choice']);
          console.log(data);
        },
        error => {
          debugger
          //  this.alertService.error(error);
          //  this.loading = false;
        });


  }
}

