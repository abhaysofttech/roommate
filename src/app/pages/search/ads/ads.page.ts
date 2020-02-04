import { Component, OnInit } from '@angular/core';
import { PostadsService } from 'src/app/_service/postads.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pager: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  Ads: any;
  reqGender = '';
  foo: any;
  public loading:boolean=true;
  constructor(
    private _postadsService: PostadsService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    debugger
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.Ads = this.router.getCurrentNavigation().extras.state.id;
        console.log(this.Ads);
        this.loading = false;

      }
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {this.reqGender = JSON.parse(params.id)});
    // this._postadsService.getAllAds(this.reqGender)
    // .subscribe(
    //   res =>{
    //     this.Ads=res;
    //     console.log(res);
    //   })
  }

}
