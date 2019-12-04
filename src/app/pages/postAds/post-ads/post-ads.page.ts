import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostadsService } from 'src/app/_service/postads.service';

@Component({
  selector: 'app-post-ads',
  templateUrl: './post-ads.page.html',
  styleUrls: ['./post-ads.page.scss'],
})
export class PostAdsPage implements OnInit {
  adpost:FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _postadsService:PostadsService,
    private route:Router
  ) { }

  ngOnInit() {
    this.adpost = this.formBuilder.group({
      roomType: ['', Validators.required],
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
    this.submitted = true;

    // stop here if form is invalid
    if (this.adpost.invalid) {
      return;
    }
    console.log(this.adpost.value);
    this._postadsService.postadsf(this.adpost.value)
    .subscribe(
      data =>{
        console.log(data);
      }
    )


}
}
