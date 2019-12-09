import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostadsService } from 'src/app/_service/postads.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.page.html',
  styleUrls: ['./post-ads.page.scss'],
})
export class PostAdsPage implements OnInit {
  adpost: FormGroup;
  loading = false;
  submitted = false;
  adsArray: Array<string> = [];

  constructor(
    private formBuilder: FormBuilder,
    private _postadsService: PostadsService,
    private route: Router,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.adpost = this.formBuilder.group({
      roomType: ['', Validators.required],
      gender: ['', Validators.required],
      marital: ['', Validators.required],
      apparttype: ['', Validators.required],
      bhkType: ['', Validators.required],
      gatedSecurity: ['', Validators.required],
      vegNonveg: ['', Validators.required],
      bathroom: ['', Validators.required],
      balcony: ['', Validators.required],
      cupboard: ['', Validators.required],


    });
  }
  // convenience getter for easy access to form fields

  get f() {
    return this.adpost.controls;
  }
  onSubmit() {
    // debugger;
    this.adsArray = [];
    this.submitted = true;

    // stop here if form is invalid
    if (this.adpost.invalid) {
      return;
    }
    this.storage.get('phonenumber').then((phonenumber) => {
      this.storage.get('username').then((username) => {
        this.adpost.value.phonenumber = phonenumber;
        this.adpost.value.username = username;

        this._postadsService.postAds(this.adpost.value)
          .subscribe(
            data => {
              console.log(data);
              this.storage.get('myads').then((adsDetails) => {
                if (adsDetails) {
                  this.adsArray = adsDetails.split(',')
                }
                //   adsDetails?{ this.adsArray.push(JSON.parse(adsDetails))}:'';
                this.adsArray.push(data.toString());
  
                this.storage.set('myads', this.adsArray.toString());
                this.route.navigate(['/rent-details', data]);
              })
  
            }
          )
      });
   
    });



  }
}
