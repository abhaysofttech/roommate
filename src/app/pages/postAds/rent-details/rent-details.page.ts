import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostadsService } from 'src/app/_service/postads.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.page.html',
  styleUrls: ['./rent-details.page.scss'],
})
export class RentDetailsPage implements OnInit {
  adrent: FormGroup;
  loading = false;
  submitted = false;
  adsId = '';
  constructor(
    private formBuilder: FormBuilder,
    private _postadsService: PostadsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    debugger;
    this.adrent = this.formBuilder.group({
      rentAmount: ['', Validators.required],
      depositAmount: ['', Validators.required],
      rentNegotiable: [true, Validators.required],


    });
    this.route.params.subscribe(params => this.adsId = params.id);
  }
  get f() {
    return this.adrent.controls;
  }

  onSubmit() {
    this.submitted = true;

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
          this.router.navigate(['/amenities', this.adsId]);
          console.log(data);
        },
        error => {
          //  this.alertService.error(error);
          //  this.loading = false;
        });


  }
}
