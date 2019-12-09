import { Component, OnInit } from '@angular/core';
import { PostadsService } from 'src/app/_service/postads.service';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.page.html',
  styleUrls: ['./ads-details.page.scss'],
})
export class AdsDetailsPage implements OnInit {

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
