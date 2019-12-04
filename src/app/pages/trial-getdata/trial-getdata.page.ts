import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/_service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trial-getdata',
  templateUrl: './trial-getdata.page.html',
  styleUrls: ['./trial-getdata.page.scss'],
})
export class TrialGetdataPage implements OnInit {
  userData:any;

  constructor(
    private _userServiceService:UserServiceService,
    private route:Router
  ) { }

  ngOnInit() {
    this._userServiceService.getAll()
    .subscribe(
      res =>{
        this.userData=res;
        console.log(res);
      })
  }

}
