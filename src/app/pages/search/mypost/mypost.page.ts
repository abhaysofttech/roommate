import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostadsService } from 'src/app/_service/postads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.page.html',
  styleUrls: ['./mypost.page.scss'],
})
export class MypostPage implements OnInit {
  myAds:any;

  constructor(
    private _postadsService: PostadsService,
    private route: Router,
  ) { }

  ngOnInit() {
    this._postadsService.getMyAds()
    .subscribe(
      res =>{
        this.myAds=res;
        console.log(res);
      })
  }

}
