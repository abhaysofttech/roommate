import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../_service/login-service.service';
import { first } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { LocationSelect } from '../pages/location-select/location-select.page';
import { NavController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  loading = false;
  returnUrl: any;
  router: any;
  // AuthenticationService:any;

  constructor(
    private formBuilder: FormBuilder, private route: Router,
    private loginServiceService: LoginServiceService,
    private storage: Storage,
    //  private alertService: AlertService,
    public navCtrl: NavController, public modalCtrl: ModalController


  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phonenumber: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.storage.get('phonenumber').then((phonenumber) => {
      //  this.route.params.subscribe(params => this.adsId = params.id);
      if (phonenumber) {
        this.route.navigate(['/choice']);
      }
    });

  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }




  onSubmit() {
    // debugger
    // console.log(this.submitted);

    this.submitted = true;
    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = true;
    console.log(this.loginForm.value);
    // if (this.f.phonenumber.value === 111 && this.f.password.value === 'advik') {
    //    this.route.navigate(['/ads']);

    // }
    // else{
    //   alert("please enter valid user name");
    // }


    this.loading = true;
    this.loginServiceService.login(this.f.phonenumber.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          //  this.alertService.presentAlert(['Login successful', '', 'Hi ' + data.firstname + ', Welcome to my complain', 'OK']);
          //  if (!data.userState || !data.userDivision || !data.userDistrict || !data.userZone || !data.userZone) {
          //
          //else 
          this.route.navigate(['/choice']);
          // Save logged in user details in local db
          this.storage.set('phonenumber', this.f.phonenumber.value)
          this.storage.set('username', data.firstname)
          this.storage.set('dob', data.dob)
          this.storage.set('userGender', data.userGender)
        },
        error => {
          //  this.alertService.error(['Login Fail', '', error]);
          this.loading = false;
        });




    // if(this.f.phonenumber.value == 878787){
    //   this.router.navigate([this.returnUrl]);
    // }
    // else{
    //   this.authenticationService.login(this.f.phonenumber.value, this.f.password)
    //   .pipe(first())
    //   .subscribe(
    //     data =>{
    //       this.alertService.presentAlert(['Login successful', '', 'Hi ' + data.firstname + ', Welcome to my complain', 'OK']);
    //       this.router.navigate(['/home']);

    //     }
    //   )
    // }

  }

  async launchLocationPage(){

   // this.route.navigate(['/location-select']);
    let modal = await this.modalCtrl.create({
      component: LocationSelect
    });
    

    // // modal.onDidDismiss((location) => {
    // //     console.log(location);
    // // });

    return await modal.present();    

}
}