import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostadsService } from 'src/app/_service/postads.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.page.html',
  styleUrls: ['../ads/ads.page.scss'],
})
export class MypostPage implements OnInit {
  myAds:any;
  adsId = '';
  constructor(
    private _postadsService: PostadsService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.storage.get('phonenumber').then((phonenumber) => {
  //  this.route.params.subscribe(params => this.adsId = params.id);
    this._postadsService.getMyAds(phonenumber)
    .subscribe(
      res =>{
        this.myAds=res;
        console.log(res);
      })
    });
  }

}
