import { Component, OnInit } from '@angular/core';
import { PostadsService } from 'src/app/_service/postads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  Ads:any;

  constructor(
    private _postadsService: PostadsService,
  ) { }

  ngOnInit() {
    this._postadsService.getAll()
    .subscribe(
      res =>{
        this.Ads=res;
        console.log(res);
      })
  }

}
