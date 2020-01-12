import { Component, OnInit } from '@angular/core';
import { PostadsService } from 'src/app/_service/postads.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ads-details',
  templateUrl: './ads-details.page.html',
  styleUrls: ['./ads-details.page.scss'],
})
export class AdsDetailsPage implements OnInit {
  adsId = '';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.adsId = params.id);

    this._postadsService.getAdsDetails(this.adsId)
    .subscribe(
      res =>{
        this.Ads=res;
        console.log(res);
      })
  }
}
